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

const CodeKey = require( "./code-key.library.js" );
const CodeValue = require( "./code-value.library.js" );

const CodeNode = (
	function CodeNode( codeKey, codeValue ){
		/*;
			@definition:
				@class:#CodeNode
					@description:
					@description;
				@class;

				@parameter:#codeKey
					@type:
							object:as:CodeKey
					@type;

					@description:
					@description;
				@parameter;

				@parameter:#codeValue
					@type:
							object:as:CodeValue
						|	object
					@type;

					@description:
					@description;
				@parameter;

				@result:#result
					@type:
							object:as:CodeNode
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
							instanceof	CodeNode
						)
					===	true
				)
		){
			if(
					(
							(
											codeKey
								instanceof	CodeKey
							)
						===	true
					)
			){
				this
				.push(
					(
						codeKey
					)
				);
			}
			else{
				throw	(
							new	Error(
									(
										[
											"#cannot-create-code-node;",

											"cannot create code node;",
											"invalid code key parameter;",

											"@code-key:",
											`${ codeKey };`
										]
									)
								)
						);
			}

			if(
					(
							(
											codeValue
								instanceof	CodeValue
							)
						===	true
					)

				||	(
							(
									typeof
									codeValue
								==	"object"
							)

						&&	(
									codeValue
								!==	null
							)
					)
			){
				this
				.push(
					(
						codeValue
					)
				);
			}
			else{
				throw	(
							new	Error(
									(
										[
											"#cannot-create-code-node;",

											"cannot create code node;",
											"invalid code value parameter;",

											"@code-value:",
											`${ codeValue };`
										]
									)
								)
						);
			}
		}
		else{
			return	(
						new	CodeNode(
								(
									codeKey
								),

								(
									codeValue
								)
							)
					);
		}
	}
);

const CodeNodePrototype = (
		CodeNode
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
		CodeNodePrototype
		.toString
	=	(
			function toString( ){
				return	(
							this[ 0 ]
							.toString( )
						);
			}
		)
);

(
		CodeNodePrototype
		.valueOf
	=	(
			function valueOf( ){
				return	(
							this[ 1 ]
						);
			}
		)
);

(
		module
		.exports
	=	(
			CodeNode
		)
);
