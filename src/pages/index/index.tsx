import { Component, Fragment } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { State } from 'src/types'
import SButton from '../../components/button'

import { FC } from '../function-component-FC'
import { FCUseStateHook } from '../hook-useState'
import { VIfVShow } from '../v-if&v-show'
import { VFor } from '../v-for'
import { Computed } from '../computed'
import { Watch } from '../watch'
import { StyleClass } from '../style-class'
import { UserInfoContext } from '../../context'
import { ProvideInject } from '../provide-inject'
import { Slot } from '../slot'
import ClassComponent from '../class-component'

export default class Index extends Component<undefined | null, State> {
	render() {
		return (
			<Fragment>
				<UserInfoContext.Provider value={{ userInfo: { name: '前端胖头鱼' } }}>
					{/*<Routes>*/}
					{/*<Route path='/v-if' element={<Vif />} />*/}
					{/*</Routes>*/}

					{/*正常写法*/}
					<ClassComponent />

					{/*传递父子关系*/}
					<SButton value={false}> </SButton>

					{/*函数式组件*/}
					<FC message='函数式组件'>传递的children</FC>

					{/*函数式组件*/}
					<FCUseStateHook>1</FCUseStateHook>

					{/*Vue Api React的写法*/}
					<VIfVShow />

					<VFor />
					<Computed />
					<Watch />
					<StyleClass />
					<ProvideInject />

					<Slot
						nameSlot={<View>具名插槽</View>}
						scopeSlot={(userInfo) => <div>{userInfo.name}</div>}>
						默认插槽
					</Slot>
				</UserInfoContext.Provider>
			</Fragment>
		)
	}
}
