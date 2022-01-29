import { PureComponent, Fragment } from 'react'
import { View } from '@tarojs/components'

import './index.scss'
import { State } from 'src/types'
import { UserInfoContext } from '../../context'

import { FC } from '../function-component/FC'
import { UseStateHook } from '../hook/useState'
import { VIfVShow } from '../Vue&React/v-if&v-show'
import { VFor } from '../Vue&React/v-for'
import { Computed } from '../Vue&React/computed'
import { Watch } from '../Vue&React/watch'
import { StyleClass } from '../Vue&React/style-class'
import { ProvideInject } from '../tool/createContext-provide-inject'
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
import { CreateElementUse } from '../tool/createElement'
import { CreateRef } from '../tool/createRef'
import { IsValidElement } from '../tool/isValidElement'
import { ChildrenMapForEachCountToArrayOnly } from '../tool/children-map-forEach-count'
import { UseEffectHook } from '../hook/useEffect'
import { UseMemoHookComputed } from '../hook/useMemo-computed'
import { UseCallBackHook } from '../hook/useCallBack'
import { UseRefHook } from '../hook/useRef'
import { UseReducerHook } from '../hook/useReducer'
import { UseDebugValueHook } from '../hook/useDebugValue-customHook'
import { UseImperativeHandleHook } from '../ex'
import { ReactDOMRender } from '../react-dom/render&hydrate'
import { CreatePortal } from '../react-dom/createPortal'
import { FlushSync } from '../react-dom/flushSync'
import { UnmountComponentAtNode } from '../react-dom/unmountComponentAtNode'
import { Unstable_BatchedUpdates } from '../react-dom/unstable_batchedUpdates'

export default class Index extends PureComponent<{}, State> {
	render() {
		// ReactDOM Api
		ReactDOMRender()
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
					{/*Vue Api React的写法*/}
					<VIfVShow />
					<VFor />
					<Computed />
					<Watch />
					<StyleClass />
					<Slot
						nameSlot={<View>具名插槽</View>}
						scopeSlot={(userInfo) => <View>{userInfo.name}</View>}>
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
					{/*工具类Api使用*/}
					<CreateElementUse />
					<ProvideInject />
					<CreateRef />
					<IsValidElement />
					<ChildrenMapForEachCountToArrayOnly />
					{/*Hook*/}
					<UseStateHook>1</UseStateHook>
					<UseEffectHook />
					<UseMemoHookComputed />
					<UseCallBackHook />
					<UseRefHook />
					<UseReducerHook />
					<UseDebugValueHook />
					<UseImperativeHandleHook />

					{/*ReactDOM Api*/}
					<CreatePortal />
					<FlushSync />
					<UnmountComponentAtNode />
					<Unstable_BatchedUpdates />
				</UserInfoContext.Provider>
			</Fragment>
		)
	}
}
