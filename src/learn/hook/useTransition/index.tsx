// !实验阶段 React 18

// import { FC, useState } from 'react'
//
// type AppProps = {}
// const SUSPENSE_CONFIG = { timeoutMs: 2000 }
//
// // useTransition: 延时由state改变而带来的视图渲染。避免不必要的渲染。
// // 它还允许组件将速度较慢的数据获取更新推迟到随后渲染，以便能够立即渲染更重要的更新。
// export const UseTransitionHook: FC<AppProps> = () => {
// 	const [resource, setResource] = useState(initialResource)
// 	const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG)
// 	return (
// 		<>
// 			<button
// 				disabled={isPending}
// 				onClick={() => {
// 					startTransition(() => {
// 						const nextUserId = getNextId(resource.userId)
// 						setResource(fetchProfileData(nextUserId))
// 					})
// 				}}>
// 				Next
// 			</button>
// 			{isPending ? ' 加载中...' : null}
// 			<Suspense fallback={<Spinner />}>
// 				<ProfilePage resource={resource} />
// 			</Suspense>
// 		</>
// 	)
// }
