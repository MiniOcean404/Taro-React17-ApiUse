import { PureComponent, Fragment } from 'react'
import { View } from '@tarojs/components'

import './index.scss'
import { State } from 'src/types'
import { UserInfoContext } from '../../tool/context'

import { FC } from '../../learn/function-component/FC'
import { UseStateHook } from '../../learn/hook/useState'
import { VIfVShow } from '../../learn/Vue&React/v-if&v-show'
import { VFor } from '../../learn/Vue&React/v-for'
import { Computed } from '../../learn/Vue&React/computed'
import { Watch } from '../../learn/Vue&React/watch'
import { StyleClass } from '../../learn/Vue&React/style-class'
import { ProvideInject } from '../../learn/tool/createContext-provide-inject'
import { Slot } from '../../learn/Vue&React/slot'
import ClassComponent from '../../learn/component/pure-component'
import SButton from '../../components/button'
import Memo from '../../learn/component/memo'
import { ForWardRef } from '../../learn/component/forwardRef'
import { HocForwardRef } from '../../learn/component/hoc-forwardRef'
import { LazyAndSuspense } from '../../learn/component/lazy&Suspense'
import { FragmentUse } from '../../learn/component/fragment'
import { ProfilerUse } from '../../learn/component/profiler'
import { StrictModeUse } from '../../learn/component/StrictMode'
import { CreateElementUse } from '../../learn/tool/createElement'
import { CreateRef } from '../../learn/tool/createRef'
import { IsValidElement } from '../../learn/tool/isValidElement'
import { ChildrenMapForEachCountToArrayOnly } from '../../learn/tool/children-map-forEach-count'
import { UseEffectHook } from '../../learn/hook/useEffect'
import { UseMemoHookComputed } from '../../learn/hook/useMemo-computed'
import { UseCallBackHook } from '../../learn/hook/useCallBack'
import { UseRefHook } from '../../learn/hook/useRef'
import { UseReducerHook } from '../../learn/hook/useReducer'
import { UseDebugValueHook } from '../../learn/hook/useDebugValue-customHook'
import { ReactDOMRender } from '../../learn/react-dom/render&hydrate'
import { CreatePortal } from '../../learn/react-dom/createPortal'
import { FlushSync } from '../../learn/react-dom/flushSync'
import { UnmountComponentAtNode } from '../../learn/react-dom/unmountComponentAtNode'
import { Unstable_BatchedUpdates } from '../../learn/react-dom/unstable_batchedUpdates'
import { isWeAPP } from '../../tool/runtimeEnv'

export default class Practice extends PureComponent<{}, State> {
	componentDidUpdate() {
		// ReactDOM Api
		if (!isWeAPP) ReactDOMRender()
		return true
	}

	render() {
		return (
			<Fragment>
				<UserInfoContext.Provider value={{ userInfo: { name: '?????????' } }}>
					{/*<Routes>*/}
					{/*<Route path='/v-if' element={<Vif />} />*/}
					{/*</Routes>*/}

					{/*??????????????????*/}
					<SButton value={false}> </SButton>

					{/*???????????????*/}
					<FC message='???????????????'>?????????children</FC>

					{/*Vue Api React?????????*/}
					<VIfVShow />
					<VFor />
					<Computed />
					<Watch />
					<StyleClass />
					<Slot
						nameSlot={<View>????????????</View>}
						scopeSlot={(userInfo) => <View>{userInfo.name}</View>}>
						????????????
					</Slot>

					{/*?????????Api??????*/}
					<ClassComponent />
					<FragmentUse />
					<StrictModeUse />
					<Memo />
					<ForWardRef />
					<HocForwardRef />
					<LazyAndSuspense />
					<ProfilerUse />

					{/*?????????Api??????*/}
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
