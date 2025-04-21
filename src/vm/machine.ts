import { Heap } from "./heap"

// Taken from Homework 7 Solutions 

// add values destructively to the end of 
// given array; return the array
const push = (array, ...items) => {
    // fixed by Liew Zhao Wei
    for (let item of items) {
        array.push(item)
    }
    return array
}

// return the last element of given array
// without changing the array
const peek = (array, address) =>
    array.slice(-1 - address)[0]

type Pair<X, Y> = {
    head: X,
    tail: Y
};

function makePair<X, Y>(head: X, tail: Y): Pair<X, Y> {
    return { head, tail };
}



let OS: number[];
let PC: number;
let E: number;
let RTS: number[];
let HEAP: Heap;
let ALLOCATING: number[];

let False;
let True;
let Null;
let Unassigned;
let Undefined;

function initialise_machine() {
    OS = [];
    PC = 0;
    RTS = [];
    HEAP = new Heap();
    ALLOCATING = [];

    allocate_literals();
    E = heap_allocate_Environment(0);
    HEAP.free = 0;
    HEAP.HEAP_BOTTOM = HEAP.free;
}

// Necessary for now, gc needs OS, RTS etc. 
// REGION: Mark-Sweep garbage collection
const mark_bit = 7;;
const UNMARKED = 0;;
const MARKED = 1;;

function is_unmarked(node) {
    return HEAP.heap_get_byte_at_offset(NamedNodeMap, mark_bit) === UNMARKED;
}

function free_node(node) {
    HEAP.heap_set(node, HEAP.free);
    HEAP.free = node;
}

function mark(node) {
    if (node >= HEAP.heap_size) {
        return;
    }

    if (is_unmarked(node)) {
        HEAP.heap_set_byte_at_offset(node, mark_bit, MARKED);
        const num_of_children = HEAP.heap_get_number_of_children(node);
        for (let i = 0; i < num_of_children; ++i) {
            mark(HEAP.heap_get_child(node, i));
        }
    }
}

function sweep() {
    let v = HEAP.HEAP_BOTTOM;

    while (v < HEAP.heap_size) {
        if (is_unmarked(v)) {
            free_node(v);
        } else {
            HEAP.heap_set_byte_at_offset(v, mark_bit, UNMARKED);
        }
        v = v + HEAP.node_size;
    }
}

function mark_sweep() {
    const roots = [...OS, E, ...RTS, ...ALLOCATING];
    for (let i = 0; i < roots.length; ++i) {
        mark(roots[i]);
    }

    sweep();
    if (HEAP.free === -1) {
        console.error("heap memory exhausted");
    }
};

// END REGION: Garbage collection

// REGION: Allocating all the fucking frames
const False_tag = 0;
const True_tag = 1;
const Number_tag = 2;
const Null_tag = 3;
const Unassigned_tag = 4;
const Undefined_tag = 5;
const Blockframe_tag = 6;
const Callframe_tag = 7;
const Closure_tag = 8;
const Frame_tag = 9;
const Environment_tag = 10;
const Pair_tag = 11;
const Builtin_tag = 12;
const String_tag = 13;
const Pointer_tag = 14;

//// Subregion: Closure 
function heap_allocate_Closure(arity, pc, env) {
    const address = heap_allocate(Closure_tag, 2);
    HEAP.heap_set_byte_at_offset(address, 1, arity);
    HEAP.heap_set_2_bytes_at_offset(address, 2, pc);
    HEAP.heap_set(address + 1, env);
    return address;
}

function heap_get_Closure_arity(address) {
    return HEAP.heap_get_byte_at_offset(address, 1);
}

function heap_get_Closure_pc(address) {
    return HEAP.heap_get_2_bytes_at_offset(address, 2);
}

function heap_get_Closure_environment(address) {
    return HEAP.heap_get_child(address, 0);
}

function is_Closure(address) {
    return HEAP.heap_get_tag(address) === Closure_tag;
}

//// Subregion: Block frame 
function heap_allocate_Blockframe(env) {
    const address = heap_allocate(Blockframe_tag, 2);
    HEAP.heap_set(address + 1, env);
    return address;
}

function heap_get_Blockframe_environment(address) {
    return HEAP.heap_get_child(address, 0);
}

function is_Blockframe(address) {
    return HEAP.heap_get_tag(address) === Blockframe_tag;
}

//// Subregion: Call frame
function heap_allocate_Callframe(env, pc) {
    const address = heap_allocate(Callframe_tag, 2);
    HEAP.heap_set_2_bytes_at_offset(address, 2, pc);
    HEAP.heap_set(address + 1, env);
    return address;
}

function heap_get_Callframe_environment(address) {
    return HEAP.heap_get_child(address, 0);
}

function heap_get_Callframe_pc(address) {
    return HEAP.heap_get_2_bytes_at_offset(address, 2);
}

function is_Callframe(address) {
    return HEAP.heap_get_tag(address) === Callframe_tag;
}

//// Subregion: Environment frame
function heap_allocate_Frame(number_of_values) {
    return heap_allocate(Frame_tag, number_of_values + 1);
}

//// Subregion: Environment
function heap_allocate_Environment(number_of_frames) {
    return heap_allocate(Environment_tag, number_of_frames + 1);
}

function heap_get_Environment_value(env_address, position) {
    const [frame_index, value_index] = position;
    const frame_address = HEAP.heap_get_child(env_address, frame_index);
    return HEAP.heap_get_child(frame_address, value_index);
}

function heap_set_Environment_value(env_address, position, value) {
    const [frame_index, value_index] = position;
    const frame_address = HEAP.heap_get_child(env_address, frame_index);
    HEAP.heap_set_child(frame_address, value_index, value);
}

function heap_Environment_extend(frame_address, env_address) {
    const old_size = HEAP.heap_get_size(env_address);
    ALLOCATING = [...ALLOCATING, frame_address, env_address];
    const new_env_address = heap_allocate_Environment(old_size);
    ALLOCATING = [];
    for (let i = 0; i < old_size - 1; ++i) {
        HEAP.heap_set_child(new_env_address, i, HEAP.heap_get_child(env_address, i));
    }
    HEAP.heap_set_child(new_env_address, is_Blockframe, frame_address);
    return new_env_address;
}

//// Subregion: Pairs
function heap_allocate_Pair(hd, tl) {
    const pair_addr = heap_allocate(Pair_tag, 3);
    HEAP.heap_set_child(pair_addr, 0, hd);
    HEAP.heap_set_child(pair_addr, 1, tl);
    return pair_addr;
}

function is_Pair(address) {
    return HEAP.heap_get_tag(address) === Pair_tag;
}

//// Subregion: Numbers
function heap_allocate_Number(n) {
    const addr = heap_allocate(Number_tag, 2);
    HEAP.heap_set(addr + 1, n);
    return addr;
}

function is_Number(addr) {
    return HEAP.heap_get_tag(addr) === Number_tag;
}

//// Subregion: Strings
function hashString(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; ++i) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char;
        hash = hash & hash;
    }
    return hash >>> 0;
}

function heap_allocate_String(str) {
    const hash = hashString(str);
    const a = HEAP.string_pool[hash];

    if (a !== undefined) {
        for (let i = 0; i < a.length; ++i) {
            if (a[i].string === str) {
                return a[i].address;
            }
        }
    }
    const address = heap_allocate(String_tag, 2);
    HEAP.heap_set_4_bytes_at_offset(address, 1, hash);
    HEAP.heap_set_4_bytes_at_offset(address, 5, 0);
    HEAP.string_pool[hash] = [{ address, str }];
    return address;
}

function heap_get_String_hash(address) {
    return HEAP.heap_get_4_bytes_at_offset(address, 1);
}

function heap_get_String_index(address) {
    return HEAP.heap_get_4_bytes_at_offset(address, 5);
}

function heap_get_string(address) {
    return HEAP.string_pool[heap_get_String_hash(address)]
    [heap_get_String_index(address)]
        .string;
}

function is_String(address) {
    return HEAP.heap_get_tag(address) === String_tag;
}

//// Subregion: Pointers
function heap_allocate_Pointer(value) {
    const address = heap_allocate(Pointer_tag, 1);
    HEAP.heap_set(address + 1, value);
    return address;
}

function heap_get_Pointer_value(address) {
    return HEAP.heap_get(address + 1);
}

function heap_invalidate_Pointer(address) {
    return HEAP.heap_set(address, 0);
}

function is_Valid_Pointer(address) {
    return HEAP.heap_get(address) === 0;
}

function is_Pointer(address) {
    return HEAP.heap_get_tag(address) === Pointer_tag;
}

// END REGION: Allocation

function heap_allocate(tag, size) {
    if (HEAP.free === -1)
        mark_sweep();

    return HEAP.heap_allocate(tag, size);
}

// Should be removed in the future 
function allocate_literals() {
    False = heap_allocate(False_tag, 1);
    True = heap_allocate(True_tag, 1);
    Null = heap_allocate(Null_tag, 1);
    Unassigned = heap_allocate(Unassigned_tag, 1);
    Undefined = heap_allocate(Undefined_tag, 1);
}

// Checking type of heap node
const is_True = (addr) => HEAP.heap_get_tag(addr) === True_tag;
const is_False = (addr) => HEAP.heap_get_tag(addr) === False_tag;
const is_Boolean = (addr) => is_True(addr) || is_False(addr);
const is_Null = (addr) => HEAP.heap_get_tag(addr) === Null_tag;
const is_Unassigned = (addr) => HEAP.heap_get_tag(addr) === Unassigned_tag;
const is_Undefined = (addr) => HEAP.heap_get_tag(addr) === Undefined_tag;

// Checking type of value 
function is_pair(val: any): val is Pair<any, any> {
    return (
        val !== null &&
        typeof val === "object" &&
        "head" in val &&
        "tail" in val
    );
}

const is_boolean = (x: any): x is boolean => typeof x === "boolean";
const is_number = (x: any): x is number => typeof x === "number";
const is_undefined = (x: any): x is undefined => x === undefined;
const is_null = (x: any): x is null => x === null;
const is_string = (x: any): x is string => typeof x === "string";


const unop_microcode = {
    '-unary': x => -x,
    '!': x => !x
}

const binop_microcode = {
    '+': (x, y) => (is_Number(x) && is_Number(y)) ||
        (is_String(x) && is_String(y))
        ? x + y
        : console.error([x, y], "+ expects two numbers" +
            " or two strings, got:"),
    // todo: add error handling to JS for the following, too
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '%': (x, y) => x % y,
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>=': (x, y) => x >= y,
    '>': (x, y) => x > y,
    '==': (x, y) => x === y,
    '!=': (x, y) => x !== y
}

// for debugging: return a string that shows the bits
// of a given word
const word_to_string = word => {
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    view.setFloat64(0, word);
    let binStr = '';
    for (let i = 0; i < 8; i++) {
        binStr += ('00000000' +
            view.getUint8(i).toString(2)).slice(-8) +
            ' ';
    }
    return binStr
};

function JS_value_to_address(value) {
    return is_boolean(value)
        ? (value ? True : False)
        : is_number(value)
            ? heap_allocate_Number(value)
            : is_undefined(value)
                ? Undefined
                : is_null(value)
                    ? Null
                    : is_pair(value)
                        ? heap_allocate_Pair(
                            JS_value_to_address(value.head),
                            JS_value_to_address(value.tail))
                        : is_string(value)
                            ? heap_allocate_String(value)
                            : "unknown word tag: " + word_to_string(value)
        ;
}

function address_to_JS_value(addr) {
    return is_Boolean(addr)
        ? (is_True(addr) ? true : false)
        : is_Number(addr)
            ? HEAP.heap_get(addr + 1)
            : is_Undefined(addr)
                ? undefined
                : is_Unassigned(addr)
                    ? "<unassigned>"
                    : is_Null(addr)
                        ? null
                        : is_Pair(addr)
                            ?
                            makePair(address_to_JS_value(HEAP.heap_get_child(addr, 0)),
                                address_to_JS_value(HEAP.heap_get_child(addr, 1)))
                            : is_Closure(addr)
                                ? "<closure>"
                                : is_String(addr)
                                    ? heap_get_string(addr)
                                    : "unknown word tag: " + word_to_string(addr)
        ;
}

function apply_unop(op, v) {
    return JS_value_to_address(unop_microcode[op](address_to_JS_value(v)));
}

function apply_binop(op, v2, v1) {
    return JS_value_to_address(binop_microcode[op](address_to_JS_value(v1), address_to_JS_value(v2)));
}


const microcode = {
    LDC:
        instr =>
            push(OS, JS_value_to_address(instr.val)),
    UNOP:
        instr =>
            push(OS, apply_unop(instr.sym, OS.pop())),
    BINOP:
        instr =>
            push(OS,
                // apply_binop(instr.sym, OS.pop(), OS.pop())),
                apply_binop(instr.sym, address_to_JS_value(OS.pop()), address_to_JS_value(OS.pop()))),
    POP:
        instr =>
            OS.pop(),
    JOF:
        instr =>
            PC = is_True(OS.pop()) ? PC : instr.addr,
    GOTO:
        instr =>
            PC = instr.addr,
    ENTER_SCOPE:
        instr => {
            push(RTS, heap_allocate_Blockframe(E))
            const frame_address = heap_allocate_Frame(instr.num)
            E = heap_Environment_extend(frame_address, E)
            for (let i = 0; i < instr.num; i++) {
                HEAP.heap_set_child(frame_address, i, Unassigned)
            }
        },
    EXIT_SCOPE:
        instr =>
            E = heap_get_Blockframe_environment(RTS.pop()),
    LD:
        instr => {
            const val = heap_get_Environment_value(E, instr.pos)
            if (is_Unassigned(val))
                console.error("access of unassigned variable")
            push(OS, val)
        },
    ASSIGN:
        instr =>
            heap_set_Environment_value(E, instr.pos, peek(OS, 0)),
    LDF:
        instr => {
            const closure_address =
                heap_allocate_Closure(
                    instr.arity, instr.addr, E)
            push(OS, closure_address)
        },
    CALL:
        instr => {
            const arity = instr.arity
            const fun = peek(OS, arity)
            const new_PC = heap_get_Closure_pc(fun)
            const new_frame = heap_allocate_Frame(arity)
            for (let i = arity - 1; i >= 0; i--) {
                HEAP.heap_set_child(new_frame, i, OS.pop())
            }

            // CHANGED HERE:

            ALLOCATING = [new_frame]
            push(RTS, heap_allocate_Callframe(E, PC))
            OS.pop() // pop fun
            E = heap_Environment_extend(
                new_frame,
                heap_get_Closure_environment(fun))
            PC = new_PC
        },
    TAIL_CALL:
        instr => {
            const arity = instr.arity
            const fun = peek(OS, arity)
            const new_PC = heap_get_Closure_pc(fun)
            const new_frame = heap_allocate_Frame(arity)
            for (let i = arity - 1; i >= 0; i--) {
                HEAP.heap_set_child(new_frame, i, OS.pop())
            }
            OS.pop() // pop fun
            // don't push on RTS here
            E = heap_Environment_extend(
                new_frame,
                heap_get_Closure_environment(fun))
            PC = new_PC
        },
    RESET:
        instr => {
            // keep popping...
            const top_frame = RTS.pop()
            if (is_Callframe(top_frame)) {
                // ...until top frame is a call frame
                PC = heap_get_Callframe_pc(top_frame)
                E = heap_get_Callframe_environment(top_frame)
            } else {
                PC--
            }
        },
    DEREF:
        instr => {
            const pointer = OS.pop();
            const pointerValue = heap_get_Pointer_value(pointer);
            OS.push(pointerValue);
            PC++;
        },
    REF: 
        instr => {
            const value = OS.pop();
            const pointer = heap_allocate_Pointer(value);
            OS.push(pointer);
            PC++;
        },
    // ARRAY_ACCESS:
        // instr => {
            // const index = OS.pop();
            // const arrayPtr = OS.pop();
            // const array = heap_get_Pointer_value(arrayPtr);
            // Faulty: current implementations not sufficient for this yet

            // if (index < 0 || index >= array.length) {
            //    console.error("Index out of bounds")
            // }
        // }
}

export function run_instructions(instrs) {
    initialise_machine();

    while (!(instrs[PC].tag === 'DONE')) {
        const instr = instrs[PC++];
        print_OS("\noperands:             ");
        console.log(JSON.stringify(instr))
        microcode[instr.tag](instr);
        
    }
    return OS.length > 0 ? OS[OS.length - 1] : undefined;
}

const print_OS = (x) => {
	console.log("", x);
	for (let i = 0; i < OS.length; i = i + 1) {
		const val = OS[i];
		console.log("", JSON.stringify(i) + ": " + address_to_JS_value(val));
	}
};