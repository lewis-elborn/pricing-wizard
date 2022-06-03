import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import { useInstanceId } from '@wordpress/compose';
import { Icon, shortcode } from '@wordpress/icons';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const instanceId = useInstanceId( Edit );
	const inputId = `blocks-wizard-input-${ instanceId }`;

	return (
		<div { ...useBlockProps( { className: 'components-placeholder' } ) }>
			<label
				htmlFor={ inputId }
				className="components-placeholder__label"
			>
				<Icon icon={ shortcode } />
				{ __( 'Pricing Wizard' ) }
			</label>
			<PlainText
				className="blocks-shortcode__textarea"
				id={ inputId }
				value={ attributes.text }
				aria-label={ __( 'Pricing wizard text' ) }
				placeholder={ __( 'Add your form shortcode here…' ) }
				onChange={ ( text ) => setAttributes( { text } ) }
			/>
		</div>
	);
}
