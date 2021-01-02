"use strict";

/*;
	@license:module:
		MIT License

		Copyright (c) 2020-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2020-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@license:module;
*/

const CodeKey = (
	function CodeKey( hashKey ){
		/*;
			@definition:
				@class:#CodeKey
					@description:
					@description;
				@class;

				@parameter:#hashKey
					@type:
							string
					@type;

					@description:
					@description;
				@parameter;

				@result:#result
					@type:
							object:as:CodeKey
					@type;

					@description:
					@description;
				@result;
			@definition;
		*/

		if(
				(
						(
										this
							instanceof	CodeKey
						)
					===	true
				)
		){
			if(
					(
							typeof
							hashKey
						==	"string"
					)

				&&	(
							hashKey
							.length
						>	0
					)
			){
				this
				.push(
					(
						hashKey
					)
				);

				(
						this
						.hashKey
					=	(
							hashKey
						)
				);
			}
		}
		else{
			return	(
						new	CodeKey(
								(
									hashKey
								)
							)
					);
		}
	}
);

const CodeKeyPrototype = (
		CodeKeyPrototype
		.prototype
	=	(
			Object
			.create(
				(
					Array
					.prototype
				)
			)
		)
);

(
		CodeKeyPrototype
		.toString
	=	(
			function toString( ){
				return	(
							this
							.hashKey
						)
			}
		)
);

(
		CodeKeyPrototype
		.valueOf
	=	(
			function valueOf( ){
				return	(
							this
							.hashKey
						)
			}
		)
);

(
		module
		.exports
	=	(
			CodeKey
		)
);
