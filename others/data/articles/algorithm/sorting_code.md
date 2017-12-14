```javascript
class sort{

	//insert sort
	static insertion_sort(arr){
		var len = arr.length;
		for (var i=1; i<len; i++){
			var tmp = arr[i];
			for (var q=i-1; q>=0 && arr[q]>tmp; q--){
				arr[q+1] = arr[q];
			}
			if (q!=i-1){
				arr[q+1] = tmp;
			}
		}
		return arr;
	}

	//select sort
	static selection_sort(arr){
		var len = arr.length;
		if (len<=1){
			return arr;
		}
		for (var i = 0; i<len-1; i++){
			var smallest = arr[i];
			var tmp = arr[i];
			var key = -1;

			for (var j=i+1; j<len; j++){
				if (arr[j] < smallest){
					smallest = arr[j]
					var key = j;
				}
			}
			//only exchange when needed
			if (key != -1){
				arr[key] = tmp;
				arr[i] = smallest;
			}
		}
		return arr;
	}

	//select sort
	static heap_sort(arr){

		/* 3 main function 
		* heapify -> used to adjust
		* build -> used one time to build
		* sort -> sort
		*/

		/*
		* parent(i) = floor((i-1)/2)
		* left(i) = 2i+1
		* right(i) = 2i+2
		*/

		var len = arr.length;

		// swap index a and b inside array
		function swap(arr, a, b){
			var tmp = arr[a];
			arr[a] = arr[b];
			arr[b] = tmp;
		}

		// core function called every time to adjust the heap
		// adjust from current node (下沉)
		// make sure the node after i satisfy the max heap
		function max_heapify(arr, current, len){

			var max = current;
			var left = 2 * current + 1;
			var right = 2 * current + 2;

			if (left<=len && arr[left]>arr[current]){
				//compare left and current
				max = left;
			}
			if (right<=len && arr[right]>arr[max]){
				//compare right and max(could be current or left)
				max = right;
			}


			if (max != current){
				swap(arr, max, current);
				max_heapify(arr, max, len);
			}
			return arr;
		}

		// called one time to build the first heap
		function build_max_heap(arr, len){

			var last_parent = Math.floor((len-1)/2);
			for (var i=last_parent; i>=0; i--){
				max_heapify(arr, i, len);
			}
			return arr;
		}

		//1. swap the root and last one
		//2. reduce the length of heap by 1
		//3. re-adjustment
		//4. repeat first step
		function sort(arr, len){
			build_max_heap(arr, len);
			for (var i =0; i<len-1; i++){
				swap(arr, 0, len-1-i);
				max_heapify(arr, 0, len-2-i);
			}
			return arr;
		}

		return sort(arr, len);
	}

	//exchange sort
	static bubble_sort(arr){
		var len = arr.length;
		for (var i=1; i<len; i++){
			for (var q=i-1; q>=0; q--){
				if (arr[q+1] < arr[q]){
					var tmp = arr[q];
					arr[q] = arr[q+1];
					arr[q+1] = tmp;
				}
			}
		}
		return arr;
	}

	//exchange sort
	static quick_sort(arr){
		var len = arr.length;
		var left = [];
		var right = [];
		var pivot = arr[0];
		if (len<=1){
			return arr;
		}
		for (var i=1; i<len; i++){
			if (arr[i]<=pivot){
				left.push(arr[i]);
			}else{
				right.push(arr[i]);
			}
		}
		return this.quick_sort(left).concat(pivot, this.quick_sort(right));
	}

	//merge sort
	static merge_sort(arr){

		function merge(left, right){
			var left_len = left.length;
			var right_len = right.length;

			var i = 0;
			var j = 0;
			var result = [];		

			while (i<left_len && j<right_len){
				if (left[i] <= right[j]){
					result.push(left[i]);
					i++;
				}else{
					result.push(right[j]);
					j++;
				}
			}
			if (i == left_len){
				//when right not empty
				result = result.concat(right.slice(j));
			}else if (j == right_len){
				//when left not empty
				result = result.concat(left.slice(i));
			}
			return result;
		}

		var len = arr.length;
		if (len<=1){
			return arr;
		}

		var mid = Math.ceil(len/2);	
		var left = arr.slice(0, mid);
		var right = arr.slice(mid, len);
		
		left = this.merge_sort(left);
		right = this.merge_sort(right);
		
		return merge(left,right);
	}

}



var arr = [1, 4, 7, 2, 5, 6, 3, 100, 50, 23, 41, 0, 5];

var insertion = sort.insertion_sort(arr);
console.log('insertion',insertion);

var bubble = sort.bubble_sort(arr);
console.log('bubble',bubble);

var quick = sort.quick_sort(arr);
console.log('quick',quick);

var merge = sort.merge_sort(arr);
console.log('merge',merge);

var selection = sort.selection_sort(arr);
console.log('selection',selection);

var heap = sort.heap_sort(arr);
console.log('heap',heap);

```
