import {
	CheckboxProperties,
	InputProperties,
	PageProperties,
	SelectorProperties,
	TitleProperties,
} from './block-properties.types';

type BlockType = 'title' | 'page' | 'input' | 'selector' | 'checkbox' | 'ref';

export interface Block {
	id: string;
	type: BlockType;
	parent_id: string;
	children?: string[];
}

export interface Page extends Block {
	type: 'page';
	properties?: PageProperties;
}

export interface Title extends Block {
	type: 'title';
	properties?: TitleProperties;
}

export interface Input extends Block {
	type: 'input';
	properties?: InputProperties;
}

export interface Selector extends Block {
	type: 'selector';
	properties?: SelectorProperties;
}

export interface Checkbox extends Block {
	type: 'checkbox';
	properties?: CheckboxProperties;
}
