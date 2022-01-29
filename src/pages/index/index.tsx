import { PureComponent, Fragment } from 'react'
import { View } from '@tarojs/components'

import './index.scss'
import { State } from 'src/types'
import { UserInfoContext } from '../../context'

import { FC } from '../function-component/FC'
import { FCUseStateHook } from '../hook/useState'
import { VIfVShow } from '../Vue&React/v-if&v-show'
import { VFor } from '../Vue&React/v-for'
import { Computed } from '../Vue&React/computed'
import { Watch } from '../Vue&React/watch'
import { StyleClass } from '../Vue&React/style-class'
import { ProvideInject } from '../Vue&React/provide-inject'
import { Slot } from '../Vue&React/slot'
import ClassComponent from '../component/pure-component'
import SButton from '../../components/button'
import Memo from '../component/memo'
import { ForWardRef } from '../component/forwardRef'
import { HocForwardRef } from '../component/hoc-forwardRef'
import { LazyAndSuspense } from '../component/lazy&Suspense'
import { FragmentUse } from '../component/fragment'
import { ProfilerUse } from '../component/profiler'
import { StrictModeUse } from '../component/StrictMode'

export default class Index extends PureComponent<{}, State> {
	render() {
		return (
			<Fragment>
				<UserInfoContext.Provider value={{ userInfo: { name: '胖头鱼' } }}>
					{/*<Routes>*/}
					{/*<Route path='/v-if' element={<Vif />} />*/}
					{/*</Routes>*/}

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

					{/*组件类Api使用*/}
					<ClassComponent />
					<Memo />
					<ForWardRef />
					<HocForwardRef />
					<LazyAndSuspense />
					<FragmentUse />
					<ProfilerUse />
					<StrictModeUse />
				</UserInfoContext.Provider>
			</Fragment>
		)
	}
}
