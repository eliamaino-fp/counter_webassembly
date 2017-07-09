import Counter from './counter.wasm' 
import Reset from './reset.wasm'

const increaser = () => {  
    const counter = new Counter({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
    })
    console.log("count function result is : " + counter.exports._count(document.getElementById("counter").innerHTML));
    document.getElementById("counter").innerHTML = counter.exports._count(document.getElementById("counter").innerHTML);
}

const resetter = () => {
	const reset = new Reset({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
	})
	console.log("Counter reset!");
	document.getElementById("counter").innerHTML = reset.exports._reset();
}

document.getElementById("counter-increaser").addEventListener("click", increaser);
document.getElementById("counter-reset").addEventListener("click", resetter);