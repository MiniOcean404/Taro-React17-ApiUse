import { Fragment, PureComponent } from 'react'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class SButton extends PureComponent<{ value: boolean }, any> {
	public static propTypes

	constructor(prop) {
		super(prop)

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({}, () => {})
	}

	render() {
		const { value } = this.props
		return (
			<Fragment>
				<View id='button'>
					<Text>父传递过来的值:{value.toString()}</Text>
				</View>

				<br />
			</Fragment>
		)
	}
}

SButton.propTypes = {
	value: PropTypes.bool,
}
