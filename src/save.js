 import { RawHTML } from '@wordpress/element';

 export default function Save( { attributes } ) {
	 return <RawHTML>{ attributes.text }</RawHTML>;
 }