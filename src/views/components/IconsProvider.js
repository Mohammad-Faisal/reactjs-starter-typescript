import React from 'react'
import { withBaseIcon } from 'react-icons-kit'

import {shoppingCart} from 'react-icons-kit/typicons/shoppingCart'
import {plus} from 'react-icons-kit/typicons/plus'
import {minus} from 'react-icons-kit/typicons/minus'





const IconContainer = withBaseIcon({ size:20 })

export const CartIconMedium = () => <IconContainer icon={shoppingCart}/>;
export const PlusIconMedium = () => <IconContainer icon={plus}/>;
export const MinusIconMedium = () => <IconContainer icon={minus}/>;



// import {building} from 'react-icons-kit/fa/building'
// import {home} from 'react-icons-kit/fa/home'
// import {users} from 'react-icons-kit/fa/users'

// import {calendar} from 'react-icons-kit/fa/calendar'
// import {calendarCheckO} from 'react-icons-kit/fa/calendarCheckO'
// import {barChart} from 'react-icons-kit/fa/barChart'
// import {calculator} from 'react-icons-kit/fa/calculator'
// import {dashboard} from 'react-icons-kit/fa/dashboard'

// import {userTimes} from 'react-icons-kit/fa/userTimes'
// import {userPlus} from 'react-icons-kit/fa/userPlus'
// import {userCheck} from 'react-icons-kit/icomoon/userCheck'
// // import {plus} from 'react-icons-kit/entypo/plus'
// import {arrows_plus} from 'react-icons-kit/linea/arrows_plus'
// import {alignJustify} from 'react-icons-kit/fa/alignJustify'




// import {userSecret} from 'react-icons-kit/fa/userSecret'
// import {gear} from 'react-icons-kit/fa/gear'
// import {creditCardAlt} from 'react-icons-kit/fa/creditCardAlt'
// import {skyatlas} from 'react-icons-kit/fa/skyatlas'
// import {plug} from 'react-icons-kit/fa/plug'
// import {ticket} from 'react-icons-kit/fa/ticket'
// import {plusSquare} from 'react-icons-kit/fa/plusSquare'


// import {arrowCurveRecycle} from 'react-icons-kit/metrize/arrowCurveRecycle'
// import {rotateRight} from 'react-icons-kit/fa/rotateRight'
// import {credit} from 'react-icons-kit/entypo/credit'
// import {shuffle} from 'react-icons-kit/ionicons/shuffle'
// import {statsBars} from 'react-icons-kit/ionicons/statsBars'
// import {code} from 'react-icons-kit/oct/code'

// import {table} from 'react-icons-kit/fa/table'
// import {person} from 'react-icons-kit/iconic/person'
// import {androidSearch} from 'react-icons-kit/ionicons/androidSearch'
// import {bank} from 'react-icons-kit/fa/bank'
// import {columns} from 'react-icons-kit/fa/columns'

// import {buildingO} from 'react-icons-kit/fa/buildingO'
// import {trello} from 'react-icons-kit/fa/trello'
// import {windowMaximize} from 'react-icons-kit/fa/windowMaximize'







const NormalIcon = (props) =>  withBaseIcon({ size: 20, style: {color: props.color}})

const WhiteIconContainer = withBaseIcon({ size: 20})
const GreenIconContainer = withBaseIcon({ size: 20, style: {color: '#14ab72'}})
const RedIconContainer = withBaseIcon({ size: 20, style: {color: '#dc143c'}})
const BlueIconContainer = withBaseIcon({ size: 20, style: {color: '#0079bf'}})
const WhiteIconContainerNavbar = withBaseIcon({ size: 16, style: {color: '#fff'}})
const BlackIconContainer = withBaseIcon({ size: 20, style: {color: '#1f2833'}})
const GreyIconContainer = withBaseIcon({ size: 12, style: {color: '#8d9091'}})


const GreenIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#14ab72'}})
const BlueIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#0079bf'}})
const WhiteIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#fff'}})
const BlackIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#1f2833'}})
const GreyIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#8d9091'}})
const RedIconContainerSmall = withBaseIcon({ size: 16, style: {color: '#dc143c'}})



































// export const MenuCollapseWhiteIcon = () => <WhiteIconContainerSmall icon={alignJustify}/>;
// export const SearchWhiteIcon = () => <WhiteIconContainer icon={androidSearch}/>;


// export const UserNotInsideWhiteIcon = () => <WhiteIconContainer icon={userTimes}/>;
// export const UserInsideWhiteIcon = () => <WhiteIconContainer icon={userSecret}/>;
// export const TotalVisitorWhiteIcon = () => <WhiteIconContainer icon={users}/>;


// export const NoticeWhiteIcon = () => <WhiteIconContainer icon={table}/>;
// export const AddAdminWhiteIcon = () => <WhiteIconContainer icon={person}/>;


// export const TotalRequestWhiteIcon = () => <BlackIconContainerSmall icon={userPlus}/>;
// export const RequestAcceptedWhiteIcon = () => <GreenIconContainerSmall icon={userCheck}/>;
// export const RequestPendingWhiteIcon = () => <BlueIconContainerSmall icon={userSecret}/>;
// export const RequestRejectedWhiteIcon = () => <RedIconContainerSmall icon={userTimes}/>;

// export const TotalNoticeWhiteIcon = () => <WhiteIconContainer icon={columns}/>;
// export const UsersNoticeWhiteIcon = () => <WhiteIconContainer icon={users}/>;
// export const GuardsNoticeWhiteIcon = () => <WhiteIconContainer icon={userSecret}/>;
// export const CommonNoticeWhiteIcon = () => <WhiteIconContainer icon={buildingO}/>;



// export const TotalFlatWhiteIcon = () => <WhiteIconContainer icon={buildingO}/>;
// export const EmptyFlatWhiteIcon = () => <WhiteIconContainer icon={trello}/>;
// export const OccupiedFlatWhiteIcon = () => <WhiteIconContainer icon={windowMaximize}/>;


// export const CreditWhiteIcon = () => <WhiteIconContainer icon={credit}/>;
// export const ExpenseWhiteIcon = () => <WhiteIconContainer icon={shuffle}/>;
// export const BalanceWhiteIcon = () => <WhiteIconContainer icon={statsBars}/>;
// export const PrevBalanceWhiteIcon = () => <WhiteIconContainer icon={code}/>;


// export const RepairCostWhiteIcon = () => <BlackIconContainerSmall icon={gear}/>;
// export const MaintenanceCostWhiteIcon = () => <BlackIconContainerSmall icon={plug}/>;
// export const SalaryCostWhiteIcon = () => <BlackIconContainerSmall icon={creditCardAlt}/>;
// export const BillPayCostWhiteIcon = () => <BlackIconContainerSmall icon={ticket}/>;
// export const OtherCostWhiteIcon = () => <BlackIconContainerSmall icon={skyatlas}/>;
// export const TotalCostWhiteIcon = () => <BlackIconContainerSmall icon={plusSquare}/>;


// export const RefreshGreyIcon = () => <GreyIconContainer icon={rotateRight}/>;


// export const ExpenseIcon = () => <WhiteIconContainer icon={creditCardAlt}/>;
// export const BankIcon = () => <WhiteIconContainer icon={bank}/>;






// export const AddUserWhiteIcon = () => <WhiteIconContainer icon={arrows_plus}/>;

// export const CalenderIcon = () => <BlackIconContainer icon={calendar}/>;
// export const CalenderIconWhite = () => <WhiteIconContainer icon={calendar}/>;
// export const BuildingIconBlack = () => <BlackIconContainer icon={building}/>;
// export const BuildingIconWhite = () => <WhiteIconContainer icon={building}/>;
// export const MonthIcon = () => <BlackIconContainer icon={calendarCheckO}/>;
// export const FlatIcon = () => <BlackIconContainer icon={home}/>;
// export const FlatIconWhite = () => <WhiteIconContainer icon={home}/>;

// export const BarChart = () => <WhiteIconContainerNavbar icon={barChart}/>;
// export const Group = () => <WhiteIconContainerNavbar icon={users}/>;
// export const Calculator = () => <WhiteIconContainerNavbar icon={calculator}/>;
// export const DashBoardIcon = () => <WhiteIconContainerNavbar icon={dashboard}/>;

