export class Heap {

    private data: ArrayBuffer; 
    private heap: DataView;
    string_pool = {}; 
    
    word_size: number = 8; 
    size_offset = 5; 
    node_size = 10; 

    HEAP_BOTTOM = undefined; 

    heap_size: number = 2 ** 16; 
    free: number = 0;

    constructor() {
        this.data = new ArrayBuffer(this.heap_size * this.word_size);
        this.heap = new DataView(this.data);
    }

    initialiseFreeList() {
        let i = 0; 
        for (i = 0; i <= this.heap_size - this.node_size; i = i + this.node_size) {
            this.heap_set(i, i + this.node_size);
        }
        this.heap_set(i - this.node_size, -1);
    }

    heap_allocate(tag, size) {
        if (size > this.node_size) {
            console.error("limitation: nodes cannot be larger than 10 words")
        }

        if (this.free === -1) { 
            // this.mark_sweep();
        }

        const address = this.free; 
        this.free = this.heap_get(this.free);
        this.heap.setInt8(address * this.word_size, tag);
        this.heap.setUint16(address * this.word_size + this.size_offset, size);
        return address; 
    }

    // Region: Heap helper functions
    heap_set_forwarding_address(node, address) { 
        this.heap.setInt32(node * this.word_size, address);
    }
    
    heap_get_forwarding_address(node) {
        return this.heap.getInt32(node * this.word_size);
    } 
        
    heap_get(address) {
        return this.heap.getFloat64(address * this.word_size);
    } 
    
    heap_set(address, x) {
        this.heap.setFloat64(address * this.word_size, x);
    }    
    
    heap_get_child(address, child_index) {
        return this.heap_get(address + 1 + child_index);
    }
    
    heap_set_child(address, child_index, value) {
        this.heap_set(address + 1 + child_index, value)
    }
        
    heap_get_tag(address) { 
        return this.heap.getInt8(address * this.word_size);
    }         
    
    heap_get_size (address) {
        return this.heap.getUint16(address * this.word_size + this.size_offset);
    } 
        
    heap_get_number_of_children(address) {
        return this.heap_get_tag(address) === 2 // Number tag
        ? 0 
        : this.heap_get_size(address) - 1;
    }

    heap_set_byte_at_offset(address, offset, value) {
        this.heap.setUint8(address * this.word_size + offset, value);
    }

    heap_get_byte_at_offset(address, offset) {
        return this.heap.getUint8(address * this.word_size + offset);
    }

    heap_set_2_bytes_at_offset(address, offset, value) {
        this.heap.setUint16(address * this.word_size + offset, value);
    }

    heap_get_2_bytes_at_offset(address, offset) {
        return this.heap.getUint16(address * this.word_size + offset);
    }

    heap_set_4_bytes_at_offset(address, offset, value) {
        this.heap.setUint32(address * this.word_size + offset, value);
    }

    heap_get_4_bytes_at_offset(address, offset) {
        return this.heap.getUint32(address * this.word_size + offset);
    }

}
