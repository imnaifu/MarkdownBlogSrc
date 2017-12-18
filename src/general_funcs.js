export default {

	toUpper(value){
		return value.toUpperCase();
	},

	toLower(value){
		return value.toLowerCase();
	},
	encodeURI(value){
	    return encodeURI(value);
	},
	decodeURI(value){
	    return decodeURI(value);
	},

	/*
	*   naifu
	*   返回一个指定长度的以目标string为中心的左右等长的substring
	*   input:
	*       fullString: string
	*       returnLength: int
	*       targetStringStart: int
	*       targetStringLength: int
	*   return object
	*/
	getSubstring(fullString, returnLength, targetStringStart, targetStringLength){
	    let result = {
	        text: null,
	        targetStart: null,
	        targetLength: targetStringLength
	    };

	    let fullStringLength = fullString.length;
	    if (fullString.length <= returnLength || targetStringLength >= returnLength){
	        //rare situation
	        result['text'] = fullString;
	        result['targetStart'] = targetStringStart;
	    }else{
	        //normal situation
	        let singleSideLength = Math.ceil((returnLength - targetStringLength)/2);

	        //handle border issue
	        let leftSide = targetStringStart - singleSideLength;
	        leftSide = (leftSide>0)?leftSide:0;
	        let rightSide = targetStringStart + targetStringLength + singleSideLength;
	        rightSide = (rightSide>(fullStringLength-1))?(fullStringLength-1):rightSide;

	        let targetStart = 0
	        if (leftSide === 0){
	            targetStart = targetStringStart;
	        }else{
	            targetStart = singleSideLength;
	        }

	        result['text'] = fullString.substring(leftSide, rightSide);
	        result['targetStart'] = targetStart;
	    }

	    return result;
	}

}