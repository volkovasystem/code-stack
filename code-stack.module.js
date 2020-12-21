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

const CodeStack = (
	function CodeStack( ){
		/*;
			@definition:
				@class:#CodeStack
					@description:
						Convert code to stack of linked node list.
					@description;
				@class;

				@parameter:#sampleParameter
					@type:
							boolean
					@type;

					@description:
					@description;
				@parameter;

				@result:#result
					@type:
							boolean
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

					@tag:#cannot-code-stack;
				@trigger;
			@definition;
		*/

		const util = require( "util" );

		try{

		}
		catch( error ){
			throw	(
						new	Error(
								(
									[
										"#cannot-code-stack;",

										"cannot code stack;",
										"cannot execute code stack;",

										"@error-data:",
										`${ util.inspect( error ) };`
									]
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
					Array
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
