package main

import (
	"fmt"
	// "io/ioutil"
	"log"
	"net/http"
	"net"
)

func handler(w http.ResponseWriter, r * http.Request) {
	fmt.Fprintf(w, "hello web")
}

func httpTest() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", nil))
}

func webSocketTest() {
	
}

func main () {
	fmt.Println("hi")
	// httpTest()
}

