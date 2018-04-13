//config for md2html
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';
import axios from 'axios';
// showdown.setFlavor('github'); //set global falvor
const converter = new showdown.Converter({
    headerLevelStart: 2, //start with h2
    // literalMidWordUnderscores: true, 
    // literalMidWordAsterisks: true,
    strikethrough: true, //allow ~~a~~
    tables: true, 
    tasklists: true,
    smartIndentationFix: true,
    // simpleLineBreaks: true,
    requireSpaceBeforeHeadingText: true,
    openLinksInNewWindow: true,
    emoji: true,
    extensions: [showdownHighlight],
    parseImgDimensions: true

});

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
	},

	/* format markdown text to html */
	md2html(md, imgPath){
		// console.log(arguments);
		let html = converter.makeHtml(md);
        //add path to img using regex
        let myRegex = /<img[^>]+src="?([^"\s]+)"?[^\/]*\/>/g;
        let src = '';

        while ( src = myRegex.exec(html) ){
            let img = src[1];
            //escape outside image
            if (!img.startsWith('http') && !img.startsWith('https')){
                html = html.replace(src[1], imgPath + src[1]);
            }
        }
        return html;
	},

	/* 
		naifu 2017-12-19
		transfer an array to object 
		if input is array of object, then can use 2nd parameter as the key of the returned object.
		e.g: let arr =  [
							{'id': '31', 'name': 'abc'},
							{'id': '42', 'name': 'bcd'}	
						];
		arr2obj(arr, 'id');
		will return {
			31: {'id': '31', 'name': 'abc'},
			42: {'id': '42', 'name': 'bcd'}	
		}
		if 2nd parameter empty, will use the array index as the key

	*/
	arr2obj(arr, key){
		let arg_len = arguments.length;
		let obj = {};
		if (arg_len < 1){
			throw new Error('Missing parameters [function arr2obj]');
		}else if (arg_len > 2){
			throw new Error('More than 2 parameters [function arr2obj]');
		}else {
			if (this.type(arr) !== 'array'){
				throw new Error('First parameter must be an array [function arr2obj]');
			}else{
				if (arr.length !== 0){
					if (arg_len === 1){
						arr.forEach(function(val, index){
							obj[index] = val;
						});												
					}else{	
						arr.forEach((val, index) => {
							if (this.type(val) === 'object'){
								obj[val[key]] = val;
							}else{
								obj[index] = val;
							}
						});						
					}
				}
			}
		}
		return obj;
	},

	/*
		jquery $.type func
		return string of the type of the input
	*/ 
	type(obj){
		if ( obj == null ) {
			return obj + "";
		}

		var class2type = {};
		// 生成class2type映射
		"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
		    class2type["[object " + item + "]"] = item.toLowerCase();
		})

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	/**
	 * Converts a string to its html characters completely.
	 *
	 * @param {String} str String with unescaped HTML characters
	 **/
	htmlEntityEncode(str) {
		var buf = [];
		
		for (var i=str.length-1;i>=0;i--) {
			buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
		}
		
		return buf.join('');
	},
	/**
	 * Converts an html characterSet into its original character.
	 *
	 * @param {String} str htmlSet entities
	 **/
	htmlEntityDecode(str) {
		return str.replace(/&#(\d+);/g, function(match, dec) {
			return String.fromCharCode(dec);
		});
	}
}