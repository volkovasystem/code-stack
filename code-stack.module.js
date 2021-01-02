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

const CodeTree = require( "./code-tree.js" );
const CodeKey = require( "./code-key.js" );
const CodeNode = require( "./code-node.js" );

const deconstructCodePhrase = (
	function deconstructCodePhrase( codePhrase, codeIndex, codeNamespace ){
		const crypto = require( "crypto" );

		const codeKey = (
			CodeKey(
				(
					crypto
					.createHash(
						(
							"sha256"
						)
					)
					.update(
						(
							[
								codeNamespace,
								codeIndex,
								(
									codePhrase
									.trim( )
									.replace(
										(
											/^[\t\s\n\r]+|[\t\s\n\r]+$/g
										),

										(
											""
										)
									)
								)
							]
						)
					)
					.digest(
						(
							"base64"
						)
					)
				)
			)
		);

		const codeNode = (
			CodeNode(

			)
		);

		return	(
					{
						codeKey,
						codeNode
					}
				);
	}
);

const CodeStack = (
	function CodeStack( codeContext, optionData ){
		/*;
			@definition:
				@class:#CodeStack
					@description:
						Convert code to stack of linked node list.
					@description;
				@class;

				@parameter:#codeContext
					@type:
							string
					@type;

					@description:
					@description;
				@parameter;

				@parameter:#optionData
					@type:
							object:with:{
								"codeNamespace": "
									[
										@type:
												string
										@type;
									]
								"
							}
					@type;

					@description:
					@description;
				@parameter;

				@result:#result
					@type:
							object:as:CodeStack
					@type;

					@description:
					@description;
				@result;

				@trigger:#trigger
					@type:
							object:as:Error
					@type;

					@description:
					@description;

					@tag:#cannot-create-code-stack;
				@trigger;
			@definition;
		*/

		if(
				(
						(
										this
							instanceof	CodeStack
						)
					===	true
				)
		){
			(
					optionData
				=	(
							(
								optionData
							)

						||	(
								{ }
							)
					)
			);

			(
					codeNamespace
				=	(
							(
								optionData
								.codeNamespace
							)

						||	(
								undefined
							)
					)
			);

			const ROOT_NODE = (
				"@root;"
			);

			const ROOT_NODE_PATTERN = (
				new RegExp(
						(
							ROOT_NODE
						),

						(
							"gm"
						)
					)
			);

			(
					this
					.rootKey
				=	(
						CodeTree(
							(
								codeNamespace
							)
						)
					)
			);

			if(
					(
							typeof
							codeContext
						==	"string"
					)

				&&	(
							codeContext
							.length
						>	0
					)

				&&	(
							ROOT_NODE_PATTERN
							.test(
								(
									codeContext
								)
							)
						!==	true
					)
			){
				(
					[
						ROOT_NODE
					]
				)
				.concat(
					(
						codeContext
						.split(
							(
								/\n/
							)
						)
					)
				)
				.forEach(
					function( codePhrase, codeIndex ){
						const	{
									codeKey,
									codeNode
								}
							=	(
									deconstructCodePhrase(
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

						if(
								(
										(
												typeof
												codePhrase
											==	"string"
										)

									&&	(
												codePhrase
												.length
											===	0
										)
								)

							||	(
										(
											/^(\n|\r|\s|\t|)+$/
										)
										.test(
											(
												codePhrase
											)
										)
									===	true
								)

							||	(
										typeof
										codePhrase
									==	"undefined"
								)
						){
							(
									codeNode
									.newLineStatus
								=	(
										true
									)
							);

							this
							.set(
								(
									codeKey
								),

								(
									codeNode
								)
							);

							this
							.rootKey
							.push(
								(
									codeKey
									.toString( )
								)
							);
						}
						else if(
								(
										ROOT_NODE_PATTERN
										.test(
											(
												codeContext
											)
										)
									!==	true
								)
						){
							this
							.set(
								(
									codeKey
								),

								(
									codeNode
								)
							);

							this
							.rootKey
							.push(
								(
									codeKey
									.toString( )
								)
							);
						}
						else{
							this
							.rootKey
							.setKey(
								(
									codeKey
									.toString( )
								)
							);

							this
							.set(
								(
									this
									.rootKey
								),

								(
									codeNode
								)
							);
						}
					}
				);
			}
			else{
				throw	(
							new	Error(
									(
										[
											"#cannot-create-code-stack;",

											"cannot create code stack;",
											"invalid code context;",

											"@code-context:",
											`${ codeContext };`
										]
									)
								)
						);
			}
		}
		else{
			return	(
						new	CodeStack(
								(
									codeContext
								),

								(
									optionData
								)
							)
					);
		}
	}
);

const CodeStackPrototype = (
		CodeStackPrototype
		.prototype
	=	(
			Object
			.create(
				(
					WeakMap
					.prototype
				)
			)
		)
);

(
		module
		.exports
	=	(
			CodeStack
		)
);
