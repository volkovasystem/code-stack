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
	function CodeKey( codePhrase, codeIndex, codeNamespace = undefined ){
		/*;
			@definition:
				@class:#CodeKey
					@description:
					@description;
				@class;

				@parameter:#codePhrase
					@type:
							string
					@type;

					@description:
					@description;
				@parameter;

				@parameter:#codeIndex
					@type:
							number
					@type;

					@description:
					@description;
				@parameter;

				@parameter:#codeNamespace
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
							codePhrase
						==	"string"
					)

				&&	(
							codePhrase
							.length
						>	0
					)

				&&	(
							typeof
							codeIndex
						==	"number"
					)

				&&	(
							isNaN(
								(
									codeIndex
								)
							)
						!==	true
					)
			){
				const crypto = require( "crypto" );

				this
				.push(
					(
						crypto
						.createHash(
							(
								"sha256"
							)
						)
						.update(
							(
								codePhrase
								.trim( )
								.replace(
									(
										/^[\n\r\s\t]+|[\n\r\s\t]+$/g
									),

									(
										""
									)
								)
							)
						)
						.digest(
							(
								"base64"
							)
						)
					)
				);

				this
				.push(
					(
						crypto
						.createHash(
							(
								"sha256"
							)
						)
						.update(
							(
								(
									[
										(
											codeNamespace
										),

										(
											codeIndex
										)
									]
								)
								.filter(
									(
										Boolean
									)
								)
								.join(
									(
										":"
									)
								)
							)
						)
						.digest(
							(
								"base64"
							)
						)
					)
				);
			}
			else{
				throw	(
							new	Error(
									(
										[
											"#cannot-create-code-key;",

											"cannot create code key;",
											"invalid parameter;",

											"@code-phrase:",
											`${ codePhrase };`,

											"@code-index:",
											`${ codeIndex };`
										]
									)
								)
						);
			}
		}
		else{
			return	(
						new	CodeKey(
								(
									codePhrase
								),

								(
									codeIndex
								),

								(
									codeNamespace
								)
							)
					);
		}
	}
);

const CodeKeyPrototype = (
		CodeKey
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
							this[ 0 ]
						);
			}
		)
);

(
		CodeKeyPrototype
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
			CodeKey
		)
);
