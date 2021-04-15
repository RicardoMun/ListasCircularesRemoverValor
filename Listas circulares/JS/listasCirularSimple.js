class NodeClass {
    constructor(value) {
        /* Propiedades que tiene todo nodo */
        this.value = value;
        this.next = null; /* Generar el enlace entre los nodos */
    }
}

class listasCircularesSimples {
    constructor() {
        /* Propiedades que tiene toda lista */
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* AÑADE nodo al INICIO de la lista */
    unshiftNode(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        /* El nuevo nodo pasa a ser la cabeza de la lista */
        this.head = newNode;
        this.length++;
        return this;
    }

    // NO ENLAZA CABEZA Y COLA 
    removerPorValor(value){

        let inicio = this.head;
        let aux = null;
        let siguiente = null;

        //
        if(this.head.value === value){
            inicio = this.head.next;
            this.head = inicio;
            this.tail.next = this.head;
        }else{
            aux = this.head;
            while(aux.next.value != value){
                aux = aux.next;
            }
            if(aux.next == this.tail){
                this.tail = aux;
                this.tail.next = this.head;
            }else{
                siguiente = aux.next;
                aux.next = siguiente.next;
            }
            this.length--;
        }
    }

    //BUSCA un nodo por el PUNTERO(NodoBuscado)
    getValorNodo(nodoBuscado) {
        if (nodoBuscado < 0 || nodoBuscado >= this.length) return null;
        let contadorNodos = 0;
        let nodoActual = this.head;
        while (contadorNodos != nodoBuscado) {
            nodoActual = nodoActual.next;
            contadorNodos++;
        }
        return nodoActual;
    }

    //VER SALIDA POR CONSOLA
    imprimirLista(){
        let arrayNodos = [];
        let nodoActual = this.head;

        while(nodoActual){
            arrayNodos.push(nodoActual.value);
            nodoActual = nodoActual.next;
        }

        //document.getElementById("lista_circular").innerHTML = arrayNodos;
    }

}
listaSimpleTest = new listasCircularesSimples();

listaSimpleTest.unshiftNode(1); /* añade nodo al inicio de la lista*/
listaSimpleTest.unshiftNode(2); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(3); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(4); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(5); /* añade nodo al inicio de la lista */
listaSimpleTest.unshiftNode(6); /* añade nodo al inicio de la lista */
listaSimpleTest.removerPorValor(1);
listaSimpleTest.removerPorValor(6);

console.log(listaSimpleTest);
