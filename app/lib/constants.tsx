import { MdDashboardCustomize, MdWorkspacesFilled, MdPermMedia } from 'react-icons/md'
import { FaBus, FaSubway, FaBroadcastTower } from "react-icons/fa"
import { SiBillboard } from 'react-icons/si'
import { MenuItemsObj } from "./interfaces"
import { HiUsers } from 'react-icons/hi2'
import { IoGrid } from 'react-icons/io5'
import { BsFillPinMapFill } from 'react-icons/bs'

// REGEXES =======================================================
export const USER_REGEX = /^[A-z]{3,20}$/
export const PASSWORD_REGEX = /^[A-z0-9!@#$%]{4,12}$/
export const DASH_REGEX = /^\/dashboard(\/)?$/
export const NOTES_REGEX = /^\/dashboard\/tasks(\/)?$/
export const USERS_REGEX = /^\/dashboard\/users(\/)?$/
export const variableCostNames2 = ['برق', 'پایش', 'بیمه', 'نگهداری', 'سایر', 'رنگ آمیزی']


// SINGLE BOX PAGE =======================================================
export const boxStructureHeadings = [
    'ردیف',
    'کد سامانه',
    'نوع سازه',
    'مسیر',
    'آدرس',
    'تاریخ شروع',
    'تاریخ پایان',
    'طول دوره',
    'تیپ', 
    'وجه', 
    'طول',
    'عرض',
    'متراژ چاپ',
    'متراژ واقعی',
    'تمام شده متر مربع', 
    'تمام شده روزانه', 
    'تمام شده ماهیانه',
    'تمام شده دوره',
    
].concat(variableCostNames2).concat(['جمع هزینه سربار روزانه', 'هزینه روزانه کل', 'هزینه ماهیانه کل', 'هزینه دوره کل'])

export const plannedStructureHeadings = ['کد سامانه', 'شماره پلن', 'نام مشتری', 'مسیر', 'قیمت فروش دوره', 'تاریخ شروع پلن', 'تاریخ پایان پلن', ]
export const structureRevenueHeadings = ['کد سامانه', 'مسیر', 'بهای تمام شده', 'مجموع فروش دوره', 'سود / زیان' ]
export const boxRevenueHeadings = ['بهای تمام شده باکس', 'مجموع فروش باکس', 'سود / زیان تجمیعی' ]

// STRUCTURES PAGE =======================================================
export const structuresTableHeadings = [
    'کاربر ایجاد کننده',
    'کد سامانه',
    'منطقه',
    'مسیر', 
    'نشانی',
    'وضعیت',
    'باکس',
    'عملیات',
    'تاریخ ایجاد',
    'تاریخ به روزرسانی'
]

// BILLBOARD PAGE =======================================================
export const billboardPagePropsObject = [
    {
        id:1,
        title: 'باکس',
        main:'مشاهده باکس ها',
        mainLink:'/dashboard/billboard/boxes', 
        subTitle:'تعریف باکس جدید', 
        subTitleLink:'/dashboard/billboard/boxes/createbox'
    },
    {
        id:1,
        title: 'پلن',
        main:'مشاهده پلن ها',
        mainLink:'/dashboard/billboard/plans', 
        subTitle:'تعریف پلن جدید', 
        subTitleLink:'/dashboard/billboard/plans/createplan'
    },
    {
        id:2,
        title: 'سازه',
        main:'مشاهده سازه ها',
        main2:'مشاهده سازه های من',
        mainLink:'/dashboard/billboard/structures', 
        main2Link:'/dashboard/billboard/structures/mystructures', 
        subTitle:'تعریف سازه جدید', 
        subTitleLink:'/dashboard/billboard/structures/createstructure',
    },
    {
        id:3,
        title: 'مشتری اولیه',
        main:'صفحه مشتریان اولیه ',
        mainLink:'/dashboard/billboard/initial-customers', 
    },
]

// TASKS PAGE =======================================================
export const notesTableHeadings = ['کاربر', 'عنوان', 'شرح', 'وضعیت','عملیات', 'تاریخ ایجاد', 'تاریخ به روزرسانی']

// USERS PAGE =======================================================
export const usersTableHeadings = ['آواتار', 'نام', 'نام کاربری', 'سطح دسترسی', 'عملیات', 'وضعیت']

// MAIN LAYOUT =======================================================
export const menuItems: MenuItemsObj[] = [{
  name: 'داشبورد',
  path: '/dashboard',
  icon: <IoGrid size={20} />
}, 
{
  name: 'کاربران',
  path: '/dashboard/users',
  icon: <HiUsers size={20} />
},
{
  name: 'وظایف',
  path: '/dashboard/tasks',
  icon: <MdDashboardCustomize size={20} />
},
{
  name: 'نقشه',
  path: '/dashboard/map',
  icon: <BsFillPinMapFill size={20} />
},
]

export const subMenusList = [
  {
    name: "رسانه",
    icon: <MdPermMedia size={20} />,
    menus: [
      {
        name: 'بیلبورد',
        icon: <SiBillboard size={20} />,
        path: '/dashboard/billboard'
      },
      {
        name: 'اتوبوس',
        icon: <FaBus size={20} />,
        path: '/dashboard/bus'
      },
      {
        name: 'مترو',
        icon: <FaSubway size={20} />,
        path: '/dashboard/subway'
      },
      {
        name: 'صدا و سیما',
        icon: <FaBroadcastTower size={20} />,
        path: '/dashboard/irib'
      },
      {
        name: 'نماوا',
        icon: <MdWorkspacesFilled size={20} />,
        path: '/dashboard/namava'
      },
    ]
  },
];
 
// NEW BOX =======================================================
export const newBoxDefaultValues = {
  boxId: `box_${new Date().getTime() + String(Math.random()).replace('.', '').slice(0, 6)}`,
  name: '',
  projectNumber: '',
  brand: '',
  startDate:new Date().getTime(),
  endDate:new Date().getTime(),
  structures: [{
    structureId:'',
    marks: {
      name: '',
      markOptions: {
        style: '',
        face: '',
        length: '',
        width: '',
        printSize: '',
        docSize: '',
      }
    },
    costs: {
      fixedCosts: {
        squareCost: ''
      },
      variableCosts: [{
        name: '',
        figures: {
          monthlyCost: ''
        }
      }]
    },
    monthlyBaseFee: ''
  }]
}

// NEW BOX - STRUCTURESFORMSECTION =======================================================
export const typeNames = [
  {id: 'عرشه پل سواره رو', name: 'عرشه پل سواره رو'},
  {id: 'پل عابر پیاده', name: 'پل عابر پیاده'},
  {id: 'بیلبورد', name: 'بیلبورد'},
]
export const styles = [
  {id: 'افقی', name: 'افقی'},
  {id: 'عمودی', name: 'عمودی'},
]
export const faces = [
  {id: 'شمالی', name: 'شمالی'},
  {id: 'جنوبی', name: 'جنوبی'},
  {id: 'غربی', name: 'غربی'},
  {id: 'شرقی', name: 'شرقی'},
]
export const boxMarks = ['مزایده ای', 'کوتاه مدت', 'بلندمدت']
export const boxMarksObject = {
  'مزایده ای' : 'owner',
  'کوتاه مدت' : 'buyShort',
  'بلند مدت' : 'buyLong'
}

export const boxStructureFormValues = {
  structureId: '',
  marks: {
    name: '',
    markOptions: {
      style: '',
      face: '',
      length: '',
      width: '',
      printSize: '',
      docSize: '',
    }
  },
  costs: {
    fixedCosts: {
      squareCost: ''
    },
    variableCosts: [{
      name: '',
      figures: {
        monthlyCost: ''
      }
    }]
  },
  monthlyBaseFee:''
}

// NEW BOX - VARIABLECOSTSFORMSECTION =======================================================
export const variableCostNames = ['برق', 'پایش', 'بیمه', 'نگهداری', 'سایر', 'رنگ آمیزی']

export const structureVariableCostsFormValues = {
  name: '',
  figures: {
      monthlyCost: ''
  }
}

// NEW PLAN =======================================================
export const newPlanDefaultValues = {
  name: '',
  customerName: '',
  brand: '',
  structures: [{
    structureId:'',
    structureRecord: {},
    duration: {
      sellStart: null,
      sellEnd: null,
    },
    monthlyFee: '',
    monthlyFeeWithDiscount:'',
    discountFee: '',
  }]
}

export const planStructureFormValues: any = {
  structureId: '',
  structureRecord:'',
  duration: {
    sellStart: null,
    sellEnd: null,
  },
  monthlyFee: '',
  monthlyFeeWithDiscount:'',
  discountFee: '',
  // monthlyBaseFee: ''
}

// PLANS =======================================================
export const plansPagePropsObject = [
  { 
      id:1,
      title: 'پلنهای پیشنهادی',
      main:'مشاهده پلنهای پیشنهادی',
      mainLink:'/dashboard/billboard/plans/suggested', 
  },
  { 
      id:2,
      title: 'پلنهای تایید شده',
      main:'مشاهده پلنهای تایید شده',
      mainLink:'/dashboard/billboard/plans/done', 
  },
  { 
      id:2,
      title: 'پلنهای رد شده',
      main:'مشاهده پلنهای رد شده',
      mainLink:'/dashboard/billboard/plans/rejected', 
  },
]

// SINGLE PLAN =======================================================
export const plansTableHeadings = [
  'ردیف',
  'کاربر ایجاد کننده',
  'نام پلن',
  'نام مشتری',
  'برند',
  'تعداد سازه',
  'عملیات',
  'وضعیت',
  'تاریخ ایجاد',
  'تاریخ به روزرسانی',
  ' '
]

// INITIAL CUSTOMER =======================================================
export const initialCustomerTableHeadings = [
  'کاربر ایجاد کننده',
  'نام مشتری',
  'عملیات',
  'تاریخ ایجاد',
  'تاریخ به روزرسانی'
]

export const mockData = [
  {
    name: 'مریم',
    username: '1',
    avatar: '1',
    role: '1',
    status: '1',
  },
  {
    name: 'ترانه',
    username: '2',
    avatar: '2',
    role: '1',
    status: '2',
  },
  {
    name: 'نگین',
    username: '3',
    avatar: '3',
    role: '3',
    status: '3',
  },
  {
    name: 'پدرام',
    username: '4',
    avatar: '4',
    role: '4',
    status: '4',
  },
  {
    name: 'گوهر',
    username: '5',
    avatar: '5',
    role: '5',
    status: '5',
  },
  {
    name: 'علی',
    username: '6',
    avatar: '6',
    role: '6',
    status: '6',
  },
  {
    name: 'آریا',
    username: '7',
    avatar: '7',
    role: '7',
    status: '7',
  },
  {
    name: 'داوود',
    username: '8',
    avatar: '8',
    role: '8',
    status: '8',
  },
  {
    name: 'رضا',
    username: '9',
    avatar: '9',
    role: '9',
    status: '9',
  },
  {
    name: 'مهدی',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'ساسان',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'صادق',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'حمیدرضا',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'بنیامین',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'آرزو',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'علیرضا',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'محمد',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'سحر',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'سارا',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
  {
    name: 'فاطمه',
    username: '10',
    avatar: '10',
    role: '10',
    status: '10',
  },
]
// MAP =======================================================
export const MapData = [
//   {
//       id: "N1128",
//       way: "مدرس",
//       address: "شمال به جنوب، تقاطع پل شهید همت(پل اول)",
//       structure: "پل سواره",
//       area: 69,
//       dimensions: "420*1640",
//       locationX: 35.7511146567983,
//       locationY: 51.42024446709259,
//       same: "",
//   },
//   {
//       id: "N1130",
//       way: "مدرس",
//       address: "شمال به جنوب ، تقاطع پل شهید همت(پل دوم)",
//       structure: "پل سواره",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.75029499714349,
//       locationY: 51.420370425046194,
//       same: "",
//   },
//   {
//       id: "N1320",
//       way: "مدرس",
//       address: "جنوب به شمال تقاطع بیهقی",
//       structure: "پل عابر",
//       area: 52,
//       dimensions: "315*1635",
//       locationX: 35.732427759137735,
//       locationY: 51.420607694085476,
//       same: "",
//   },
//   {
//       id: "N1131",
//       way: "مدرس",
//       address: "جنوب به شمال ، پل شهید همت(پل دوم)",
//       structure: "پل سواره",
//       area: 64,
//       dimensions: "420*1520",
//       locationX: 35.74992621823071,
//       locationY: 51.42145648219846,
//       same: "",
//   },
//   {
//       id: "N1345",
//       way: "مدرس",
//       address: "جنوب به شمال ، پل شهید بهشتی",
//       structure: "پل سواره",
//       area: 64,
//       dimensions: "420*1520",
//       locationX: 35.72924905011781,
//       locationY: 51.42159169251411,
//       same: "",
//   },
//   {
//       id: "N1607",
//       way: "صدر",
//       address: "شرق به غرب ، تقاطع قیطریه",
//       structure: "پل عابر",
//       area: 32,
//       dimensions: "310*1010",
//       locationX: 35.79173197669622,
//       locationY: 51.4566893450926,
//       same: "",
//   },
//   {
//       id: "N1159",
//       way: "همت",
//       address: "شرق به غرب، تقاطع شیخ بهایی(پل مکانیزه)",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "1510*310",
//       locationX: 35.75123036701031,
//       locationY: 51.397385927472975,
//       same: "",
//   },
//   {
//       id: "N1596",
//       way: "همت",
//       address: "شرق به غرب ، بعد از تقاطع، بزرگراه یادگار امام",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "260*1520",
//       locationX: 35.75107365981186,
//       locationY: 51.343944779439994,
//       same: "",
//   },
//   {
//       id: "N1828",
//       way: "همت",
//       address: "شرق به غرب، پل سواره رو ستاری",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.75321009373628,
//       locationY: 51.316338558550974,
//       same: "",
//   },
//   {
//       id: "N1475",
//       way: "همت",
//       address: "شرق به غرب، قبل از تقاطع جنت آباد",
//       structure: "پل عابر",
//       area: 59,
//       dimensions: "320*1820",
//       locationX: 35.75323661313081,
//       locationY: 51.303661700107035,
//       same: "",
//   },
//   {
//       id: "N1291",
//       way: "همت",
//       address: "شرق به غرب ، ورودی شهران",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.7534032188147,
//       locationY: 51.29014698397012,
//       same: "",
//   },
//   {
//       id: "N1597",
//       way: "همت",
//       address: "غرب به شرق، قبل از تقاطع بزرگراه یادگار امام",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "260*1520",
//       locationX: 35.75107365981186,
//       locationY: 51.343944779439994,
//       same: "N1596",
//   },
//   {
//       id: "N1279",
//       way: "همت",
//       address: "غرب به شرق، بعد از تقاطع جنت آباد",
//       structure: "پل عابر",
//       area: 59,
//       dimensions: "320*1820",
//       locationX: 35.75323661313081,
//       locationY: 51.303661700107035,
//       same: "N1475",
//   },
//   {
//       id: "N1290",
//       way: "همت",
//       address: "غرب به شرق، ورودی شهران",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.7534032188147,
//       locationY: 51.29014698397012,
//       same: "N1291",
//   },
//   {
//       id: "N1203",
//       way: "زین الدین",
//       address: "بزرگراه زین الدین،مسیر شرق به غرب ،بعد از بزرگراه امام علی(ع)",
//       structure: "پل عابر",
//       area: 51,
//       dimensions: "310*1620",
//       locationX: 35.758877,
//       locationY: 51.478396,
//       same: "",
//   },
//   {
//       id: "N1229",
//       way: "زین الدین",
//       address: "بزرگراه زین الدین،مسیر غرب به شرق،قبل از بزرگراه امام علی(ع)",
//       structure: "پل عابر",
//       area: 51,
//       dimensions: "310*1620",
//       locationX: 35.758877,
//       locationY: 51.478396,
//       same: "N1203",
//   },
//   {
//       id: "N1108",
//       way: "چمران",
//       address: "شمال به جنوب ، تقاطع ملاصدرا، نرسیده به همت",
//       structure: "پل عابر",
//       area: 46,
//       dimensions: "320*1420",
//       locationX: 35.75657591157293,
//       locationY: 51.386854535979566,
//       same: "",
//   },
//   {
//       id: "N1070",
//       way: "چمران",
//       address: "چمران جنوب به شمال بعد از تونل چمران",
//       structure: "بیلبورد",
//       area: 60,
//       dimensions: "500*1200",
//       locationX: 35.718296,
//       locationY: 51.378457,
//       same: "",
//   },
//   {
//       id: "N1097",
//       way: "چمران",
//       address: "بزرگراه چمران،مسیر شمال به جنوب،پایین تر از پل مدیریت",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "310*1510",
//       locationX: 35.766167439155566,
//       locationY: 51.38775988042419,
//       same: "",
//   },
//   {
//       id: "N1096",
//       way: "چمران",
//       address: "بزرگراه چمران،مسیر جنوب به شمال،قبل از پل مدیریت",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "310*1510",
//       locationX: 35.766167439155566,
//       locationY: 51.38775988042419,
//       same: "N1097",
//   },
//   {
//       id: "N1801",
//       way: "چمران",
//       address: "جنوب به شمال ،پل گیشا",
//       structure: "پل عابر",
//       area: 65,
//       dimensions: "320*2020",
//       locationX: 35.725083800526086,
//       locationY: 51.38178679035578,
//       same: "",
//   },
//   {
//       id: "N1455",
//       way: "یادگار امام",
//       address: "جنوب به شمال، پل سواره رو مرزداران",
//       structure: "پل عابر",
//       area: 59,
//       dimensions: "320*1820",
//       locationX: 35.73463029777297,
//       locationY: 51.34778729439406,
//       same: "",
//   },
//   {
//       id: "N1037",
//       way: "یادگار امام",
//       address: "شمال به جنوب، ابتدای خرم رودی ،قبل از پل مرزداران",
//       structure: "پل عابر",
//       area: 67,
//       dimensions: "380*1750",
//       locationX: 35.730289875047426,
//       locationY: 51.3488171701195,
//       same: "",
//   },
//   {
//       id: "N1080",
//       way: "یادگار امام",
//       address: "جنوب به شمال، ابتدای خرم رودی، بعد از پل مرزداران",
//       structure: "پل عابر",
//       area: 52,
//       dimensions: "320*1620",
//       locationX: 35.73028141358641,
//       locationY: 51.34906993772809,
//       same: "N1037",
//   },
//   // {
//   //     id: "N1617",
//   //     way: "یادگار امام",
//   //     address: "بزرگراه یادگار شمال به جنوب،ورودی خیابان فرحزادی",
//   //     structure: "پل عابر",
//   //     area: 38,
//   //     dimensions: "310*1210",
//   //     locationX: 35.754644763454934,
//   //     locationY: 51.349002729450575,
//   //     same: "",
//   // },
//   {
//       id: "N1823",
//       way: "یادگار امام",
//       address: "بزرگراه یادگار جنوب به شمال ،ورودی خیابان فرحزادی",
//       structure: "پل عابر",
//       area: 32,
//       dimensions: "310*1010",
//       locationX: 35.754644763454934,
//       locationY: 51.349002729450575,
//       same: "N1617",
//   },
//   {
//       id: "N1463",
//       way: "نیایش",
//       address: "شرق به غرب ، پل سئول",
//       structure: "پل سواره",
//       area: 65,
//       dimensions: "1615*400",
//       locationX: 35.77512698571652,
//       locationY: 51.39530510014391,
//       same: "",
//   },
//   {
//       id: "N1090",
//       way: "نیایش",
//       address: "شرق به غرب بعد از بلوار فرحزادی ، روبروی خیابان باران شرقی",
//       structure: "پل عابر",
//       area: 63,
//       dimensions: "2015*310",
//       locationX: 35.77316441878395,
//       locationY: 51.35543097861364,
//       same: "",
//   },
//   {
//       id: "N1091",
//       way: "نیایش",
//       address: "غرب به شرق ، قبل از بلوار فرحزادی ، روبروی خیابان باران غربی",
//       structure: "پل عابر",
//       area: 63,
//       dimensions: "2015*3100",
//       locationX: 35.77316441878395,
//       locationY: 51.35543097861364,
//       same: "N1090",
//   },
//   {
//       id: "N1466",
//       way: "نیایش",
//       address: "غرب یه شرق ،حدفاصل پاکنژاد و سعادت آباد",
//       structure: "پل عابر",
//       area: 65,
//       dimensions: "320*2020",
//       locationX: 35.77605278110077,
//       locationY: 51.373181701807816,
//       same: "",
//   },
//   {
//       id: "N1829",
//       way: "نیایش",
//       address: "غرب به شرق، قبل از سئول",
//       structure: "پل عابر",
//       area: 30,
//       dimensions: "320*920",
//       locationX: 35.774977657179875,
//       locationY: 51.393656265117414,
//       same: "",
//   },
//   {
//       id: "N1059",
//       way: "حکیم",
//       address: "شرق به غرب ، روبروی پارک پردیسان،(بعد از شیخ فضل الله)",
//       structure: "پل عابر",
//       area: 90,
//       dimensions: "320*2780",
//       locationX: 35.73938318779981,
//       locationY: 51.35742069200542,
//       same: "",
//   },
//   {
//       id: "N1514",
//       way: "حکیم",
//       address: "شرق به غرب، پل سواره رو کردستان",
//       structure: "پل عابر",
//       area: 48,
//       dimensions: "320*1480",
//       locationX: 35.74349639048652,
//       locationY: 51.401887914093386,
//       same: "",
//   },
//   {
//       id: "N1608",
//       way: "حکیم",
//       address: "شرق به غرب ، بعداز اتوبان باکری",
//       structure: "پل عابر",
//       area: 43,
//       dimensions: "320*1330",
//       locationX: 35.7336171631699,
//       locationY: 51.29102042197996,
//       same: "",
//   },
//   {
//       id: "N1609",
//       way: "حکیم",
//       address: "شرق به غرب ، ابتدای خیابان شقایق،(بعد از ستاری)",
//       structure: "پل عابر",
//       area: 43,
//       dimensions: "320*1330",
//       locationX: 35.73243582448956,
//       locationY: 51.306085169653116,
//       same: "",
//   },
//   {
//       id: "N1577",
//       way: "حکیم",
//       address: "بزرگراه شهید همدانی(ادامه بزرگراه حکیم)مسیر شرق به غرب،بعد از تونل پل سواره اول،ورودی خیابان ایران خودرو",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "260*1510",
//       locationX: 35.748330,
//       locationY: 51.130780,
//       same: "",
//   },
//   {
//       id: "N1578",
//       way: "حکیم",
//       address: "بزرگراه شهید همدانی(ادامه بزرگراه حکیم)مسیر غرب به شرق بعد از تونل پل سواره اول،ورودی خیابان ایران خودرو",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "260*1510",
//       locationX: 35.748330,
//       locationY: 51.130780,
//       same: "N1577",
//   },
//   {
//       id: "N1060",
//       way: "حکیم",
//       address: "غرب به شرق، روبروی پارک پردیسان(نرسیده به شیخ فضل الله)",
//       structure: "پل عابر",
//       area: 67,
//       dimensions: "320*2070",
//       locationX: 35.73938318779981,
//       locationY: 51.35742069200542,
//       same: "N1059",
//   },
//   {
//       id: "N1610",
//       way: "حکیم",
//       address: "غرب به شرق ، بعد از اتوبان باکری",
//       structure: "پل عابر",
//       area: 43,
//       dimensions: "320*1330",
//       locationX: 35.73290374854731,
//       locationY: 51.29726594429064,
//       same: "",
//   },
//   {
//       id: "N1777",
//       way: "کردستان",
//       address: "جنوب به شمال، نرسیده به بزرگراه حکیم",
//       structure: "پل عابر",
//       area: 30,
//       dimensions: "320*920",
//       locationX: 35.739971049439184,
//       locationY: 51.40197847915007,
//       same: "",
//   },
//   {
//       id: "N1603",
//       way: "کردستان",
//       address: "شمال به جنوب، بعد از خروجی ، تونل صدر اولین پل",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "1510*310",
//       locationX: 35.76916941667784,
//       locationY: 51.40275561929209,
//       same: "",
//   },
//   {
//       id: "N1773",
//       way: "رسالت",
//       address: "شرق به غرب ، تقاطع دردشت",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "320*1220",
//       locationX: 35.73460247526023,
//       locationY: 51.5039518340289,
//       same: "",
//   },
//   {
//       id: "N1472",
//       way: "رسالت",
//       address: "شرق به غرب ، چهارراه مجیدیه",
//       structure: "پل عابر",
//       area: 41,
//       dimensions: "1315*310",
//       locationX: 35.74025681635232,
//       locationY: 51.467172606644944,
//       same: "",
//   },
//   {
//       id: "N1473",
//       way: "رسالت",
//       address: "غرب به شرق، چهارراه مجیدیه",
//       structure: "پل عابر",
//       area: 41,
//       dimensions: "1315*310",
//       locationX: 35.74025681635232,
//       locationY: 51.467172606644944,
//       same: "N1472",
//   },
//   {
//       id: "N1772",
//       way: "رسالت",
//       address: "غرب به شرق، ابتدای خیابان آیت(سرسبز)",
//       structure: "پل عابر",
//       area: 27,
//       dimensions: "320*820",
//       locationX: 35.735705247962535,
//       locationY: 51.49455348387071,
//       same: "",
//   },
//   {
//       id: "N1774",
//       way: "رسالت",
//       address: "غرب به شرق ، تقاطع دردشت",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "320*1220",
//       locationX: 35.73460247526023,
//       locationY: 51.5039518340289,
//       same: "N1773",
//   },
//   {
//       id: "N1583",
//       way: "صیاد شیرازی",
//       address: "جنوب به شمال ، قبل از ورودی ، میدان هروی",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.768324634912176,
//       locationY: 51.46914470430864,
//       same: "",
//   },
//   {
//       id: "N1832",
//       way: "ستاری",
//       address: "شمال به جنوب دومین ، پل عابر بعد از بزرگراه همت ،(نرسیده به کوروش)",
//       structure: "پل عابر",
//       area: 38,
//       dimensions: "305*1205",
//       locationX: 35.74530799631136,
//       locationY: 51.31411032160904,
//       same: "",
//   },
//   {
//       id: "N1833",
//       way: "ستاری",
//       address: "جنوب به شمال ، دومین پل عابر، قبل از بزرگراه همت(بالاتر از کوروش)",
//       structure: "پل عابر",
//       area: 38,
//       dimensions: "305*1205",
//       locationX: 35.74530799631136,
//       locationY: 51.31411032160904,
//       same: "N1832",
//   },
//   {
//       id: "N1528",
//       way: "ستاری",
//       address: "جنوب به شمال ، ورودی خیابان پیامبر، جنب مجتمع کوروش",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.737489150410504,
//       locationY: 51.31307634491589,
//       same: "",
//   },
//   {
//       id: "N1299",
//       way: "اشرفی اصفهانی",
//       address: "شمال به جنوب ، بعد از پل حکیم ، روبروی مسجد سجاد(پارک صبا)",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.728468990526345,
//       locationY: 51.334365480469444,
//       same: "",
//   },
//   {
//       id: "N1300",
//       way: "اشرفی اصفهانی",
//       address: "جنوب به شمال ، قبل از پل حکیم ، روبروی مسجد سجاد(پارک صبا)",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.728468990526345,
//       locationY: 51.334365480469444,
//       same: "N1299",
//   },
//   {
//       id: "N1191",
//       way: "بابایی",
//       address: "شرق به غرب، قبل از خیابان هنگام ، روبروی شهرک سید الشهدا",
//       structure: "پل عابر",
//       area: 63,
//       dimensions: "2015*310",
//       locationX: 35.78243235426472,
//       locationY: 51.51349245849602,
//       same: "",
//   },
//   {
//       id: "N1192",
//       way: "بابایی",
//       address: "غرب به شرق ، بعد از خیابان هنگام ، روبروی شهرک سید الشهدا",
//       structure: "پل عابر",
//       area: 63,
//       dimensions: "2015*310",
//       locationX: 35.78243235426472,
//       locationY: 51.51349245849602,
//       same: "N1191",
//   },
//   {
//       id: "N1570",
//       way: "بابایی",
//       address: "غرب به شرق ، قبل از خروجی باقری ، روبروی شهرک رسولی",
//       structure: "پل عابر",
//       area: 52,
//       dimensions: "320*1620",
//       locationX: 35.77719500763281,
//       locationY: 51.52502146036828,
//       same: "",
//   },
//   {
//       id: "N1235",
//       way: "باقری",
//       address: "شمال به جنوب بزرگراه باقری،نبش خیابان182",
//       structure: "پل عابر",
//       area: 54,
//       dimensions: "310*1710",
//       locationX: 35.740290477877295,
//       locationY: 51.52256527047983,
//       same: "",
//   },
//   {
//       id: "N1236",
//       way: "باقری",
//       address: "جنوب به شمال بزرگراه باقری،نبش خیابان183",
//       structure: "پل عابر",
//       area: 54,
//       dimensions: "310*1710",
//       locationX: 35.740290477877295,
//       locationY: 51.52256527047983,
//       same: "N1235",
//   },
//   {
//       id: "N1544",
//       way: "امام علی",
//       address: "بزرگراه امام علی(ع)،شمال به جنوب،بعد از صدر،پل سواره رو شهدای اصفهان",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "260*1510",
//       locationX: 35.778779164995925,
//       locationY: 51.48995359569471,
//       same: "",
//   },
//   {
//       id: "N1525",
//       way: "امام علی",
//       address: "اتوبان امام علی(ع)،شمال به جنوب بعد از پل سواره رو جانبازان",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "310*1510",
//       locationX: 35.73007737603649,
//       locationY: 51.478026903589836,
//       same: "",
//   },
//   {
//       id: "N1068",
//       way: "شیخ فضل الله نوری",
//       address: "شمال به جنوب ، سر طرشت",
//       structure: "پل عابر",
//       area: 44,
//       dimensions: "320*1370",
//       locationX: 35.712698648045595,
//       locationY: 51.34553617582014,
//       same: "",
//   },
//   {
//       id: "N1041",
//       way: "شیخ فضل الله نوری",
//       address: "شیخ فضل الله نوری،شمال به جنوب،پایین تر از میدان صنعت،قبل از اتوبان همت(رمپ  خروجی همت)",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "310*1510",
//       locationX: 35.750429624344925,
//       locationY: 51.3711208696667,
//       same: "",
//   },
//   {
//       id: "N1069",
//       way: "شیخ فضل الله نوری",
//       address: "جنوب به شمال ، سر طرشت",
//       structure: "پل عابر",
//       area: 46,
//       dimensions: "320*1420",
//       locationX: 35.712698648045595,
//       locationY: 51.34553617582014,
//       same: "N1068",
//   },
//   {
//       id: "N1040",
//       way: "شیخ فضل الله نوری",
//       address: "شیخ فضل الله نوری،جنوب به شمال ،پایین تر از میدان صنعت،قبل از اتوبان همت(رمپ خروجی همت)",
//       structure: "پل عابر",
//       area: 41,
//       dimensions: "310*1310",
//       locationX: 35.750429624344925,
//       locationY: 51.3711208696667,
//       same: "N1041",
//   },
//   {
//       id: "N1071",
//       way: "قدوسی",
//       address: "قدوسی نرسیده به قصر",
//       structure: "پل",
//       area: 24,
//       dimensions: "800*300",
//       locationX: 35.731385,
//       locationY: 51.445433,
//       same: "",
//   },
//   {
//       id: "N1125",
//       way: "ملاصدرا",
//       address: "شرق به غرب ، پل کردستان",
//       structure: "پل سواره",
//       area: 57,
//       dimensions: "1815*310",
//       locationX: 35.75713824026238,
//       locationY: 51.40372273898145,
//       same: "",
//   },
//   {
//       id: "N1179",
//       way: "حقانی",
//       address: "شرق به غرب ، نبش خیابان دیدار",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "1515*310",
//       locationX: 35.758098943274376,
//       locationY: 51.416650692636416,
//       same: "",
//   },
//   {
//       id: "N1183",
//       way: "حقانی",
//       address: "غرب به شرق ، نبش خیابان دیدار",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "1515*310",
//       locationX: 35.758098943274376,
//       locationY: 51.416650692636416,
//       same: "N1179",
//   },
//   {
//       id: "N1537",
//       way: "ولیعصر",
//       address: "خیابان ولیعصر، جنوب به شمال پیشانی پل سواره همت",
//       structure: "پل عابر",
//       area: 47,
//       dimensions: "310*1510",
//       locationX: 35.751407,
//       locationY: 51.411292,
//       same: "",
//   },
//   {
//       id: "N1327",
//       way: "طالقانی",
//       address: "غرب به شرق ، تقاطع حافظ غربی",
//       structure: "پل سواره",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.70660291600503,
//       locationY: 51.412088251154366,
//       same: "",
//   },
//   {
//       id: "N1405",
//       way: "جمهوری",
//       address: "غرب به شرق ، عرشه پل حافظ",
//       structure: "پل سواره",
//       area: 83,
//       dimensions: "2015*410",
//       locationX: 35.69524421053879,
//       locationY: 51.41163135476712,
//       same: "",
//   },
//   {
//       id: "N1486",
//       way: "دماوند",
//       address: "شرق به غرب ، مقابل بیمارستان بوعلی",
//       structure: "پل عابر",
//       area: 32,
//       dimensions: "1010*310",
//       locationX: 35.7040251788359,
//       locationY: 51.45571258955491,
//       same: "",
//   },
//   {
//       id: "N1485",
//       way: "دماوند",
//       address: "غرب به شرق ، مقابل بیمارستان بوعلی",
//       structure: "پل عابر",
//       area: 32,
//       dimensions: "1010*310",
//       locationX: 35.7040251788359,
//       locationY: 51.45571258955491,
//       same: "N1486",
//   },
//   {
//       id: "N1445",
//       way: "آیت الله سعیدی",
//       address: "شمال به جنوب ، تقاطع چهارراه یافت آباد",
//       structure: "پل عابر",
//       area: 51,
//       dimensions: "320*1585",
//       locationX: 35.66150171492903,
//       locationY: 51.34466192164748,
//       same: "",
//   },
//   {
//       id: "N1446",
//       way: "آیت الله سعیدی",
//       address: "جنوب به شمال ، تقاطع چهارراه یافت آباد",
//       structure: "پل عابر",
//       area: 49,
//       dimensions: "320*1520",
//       locationX: 35.66150171492903,
//       locationY: 51.34466192164748,
//       same: "N1445",
//   },
//   {
//       id: "N1399",
//       way: "نواب",
//       address: "شمال به جنوب ، نبش بریانک",
//       structure: "پل عابر",
//       area: 52,
//       dimensions: "320*1620",
//       locationX: 35.673634,
//       locationY: 51.381082,
//       same: "",
//   },
//   {
//       id: "N1382",
//       way: "نواب",
//       address: "جنوب به شمال ، پیشانی پل مرتضوی",
//       structure: "پل سواره",
//       area: 59,
//       dimensions: "320*1820",
//       locationX: 35.684660114998806,
//       locationY: 51.37985091986697,
//       same: "",
//   },
//   {
//       id: "N1600",
//       way: "جناح",
//       address: "جنوب به شمال ، بعد از میدان آزادی ، پل ورودی پایانه مسافربری",
//       structure: "پل عابر",
//       area: 41,
//       dimensions: "265*1520",
//       locationX: 35.70574492133115,
//       locationY: 51.33742824718035,
//       same: "",
//   },
//   {
//       id: "N1356",
//       way: "شریعتی",
//       address: "جنوب به شمال ، پل سید خندان",
//       structure: "پل عابر",
//       area: 54,
//       dimensions: "320*1660",
//       locationX: 35.74180442146179,
//       locationY: 51.447010218296725,
//       same: "",
//   },
//   {
//       id: "N1824",
//       way: "گمنام",
//       address: "شرق به غرب ، مقابل تره بار جلال آل احمد",
//       structure: "پل عابر",
//       area: 30,
//       dimensions: "920*320",
//       locationX: 35.72328737829381,
//       locationY: 51.39217600421665,
//       same: "",
//   },
//   {
//       id: "N1045",
//       way: "ستارخان",
//       address: "شرق به غرب ، روبروی پمپ بنزین",
//       structure: "پل عابر",
//       area: 36,
//       dimensions: "1220*320",
//       locationX: 35.71131952880034,
//       locationY: 51.371405511167886,
//       same: "",
//   },
//   {
//       id: "N1046",
//       way: "ستارخان",
//       address: "غرب به شرق ،روبروی پمپ بنزین",
//       structure: "پل عابر",
//       area: 33,
//       dimensions: "1020*320",
//       locationX: 35.71131952880034,
//       locationY: 51.371405511167886,
//       same: "",
//   },
//   {
//       id: "N1464",
//       way: "آفریقا",
//       address: "شمال به جنوب ، پایین تر از دامن افشار",
//       structure: "پل عابر",
//       area: 30,
//       dimensions: "920*320",
//       locationX: 35.760481889593414,
//       locationY: 51.41787365331594,
//       same: "",
//   },
//   {
//       id: "N1465",
//       way: "آفریقا",
//       address: "جنوب به شمال ، پایین تر از دامن افشار، نرسیده به میرداماد",
//       structure: "پل عابر",
//       area: 27,
//       dimensions: "820*320",
//       locationX: 35.7511146567983,
//       locationY: 51.42024446709259,
//       same: "N1464",
//   },
//   {
//       id: "N1599",
//       way: "فاطمی",
//       address: "غرب به شرق ، تقاطع خیابان ولیعصر",
//       structure: "پل عابر",
//       area: 43,
//       dimensions: "1330*320",
//       locationX: 35.72072534664047,
//       locationY: 51.4083349224519,
//       same: "",
//   },
//   {
//       id: "N1632",
//       way: "جلال آل احمد",
//       address: "شرق به غرب ، نرسیده به پل گیشا",
//       structure: "پل عابر",
//       area: 43,
//       dimensions: "1330*320",
//       locationX: 35.72393274071805,
//       locationY: 51.384597000612416,
//       same: "",
//   },
//   {
//       id: "N1616",
//       way: "جلال آل احمد",
//       address: "غرب به شرق بزرگراه جلال آل احمد،تقاطع خیابان آرش مهر",
//       structure: "پل عابر",
//       area: 40,
//       dimensions: "1235*320",
//       locationX: 35.727078,
//       locationY: 51.373701,
//       same: "",
//   },
//   {
//       id: "N1620",
//       way: "کارگر",
//       address: "خیابان کارگر،مقابل بیمارستان فارابی",
//       structure: "پل عابر",
//       area: 29,
//       dimensions: "910*310",
//       locationX: 35.67221716330882,
//       locationY: 51.3950886494884,
//       same: "",
//   },
//   {
//       id: "N1621",
//       way: "قزوین",
//       address: "خیابان قزوین،جنب خیابان غفاری",
//       structure: "پل عابر",
//       area: 29,
//       dimensions: "910*310",
//       locationX: 35.67494734685703,
//       locationY: 51.39131545565235,
//       same: "",
//   },
//   {
//       id: "N1799",
//       way: "اتوبان تهران-کرج",
//       address: "تهران به کرج ، ورودی غربی استادیوم آزادی",
//       structure: "پل سواره",
//       area: 42,
//       dimensions: "1520*270",
//       locationX: 35.715281337561514,
//       locationY: 51.26656337582187,
//       same: "",
//   },
//   {
//       id: "N1800",
//       way: "اتوبان تهران-کرج",
//       address: "کرج به تهران ، ورودی غربی استادیوم آزادی",
//       structure: "پل سواره",
//       area: 42,
//       dimensions: "1520*270",
//       locationX: 35.715281337561514,
//       locationY: 51.26656337582187,
//       same: "N1799",
//   },
//   {
//       id: "N1270",
//       way: "اتوبان تهران-کرج",
//       address: "تهران کرج ، مقابل هواپیمایی ماهان",
//       structure: "پل عابر",
//       area: 95,
//       dimensions: "420*2250",
//       locationX: 35.713393383160145,
//       locationY: 51.331196173916354,
//       same: "",
//   },
//   {
//       id: "N1310",
//       way: "اتوبان تهران-کرج",
//       address: "آزادراه تهران کرج ، غرب به شرق ، بزرگراه شهید ستاری",
//       structure: "پل سواره",
//       area: 59,
//       dimensions: "1820*320",
//       locationX: 35.71694505761282,
//       locationY: 51.30724666415947,
//       same: "",
//   },
//   {
//       id: "N1266",
//       way: "جاده مخصوص کرج",
//       address: "شرق به غرب ، قبل از ستاری ، روبروی شهرک اکباتان",
//       structure: "پل عابر",
//       area: 44,
//       dimensions: "1620*270",
//       locationX: 35.69914870400991,
//       locationY: 51.31284688637393,
//       same: "",
//   },
//   {
//       id: "N1267",
//       way: "جاده مخصوص کرج",
//       address: "غرب به شرق ، بعد از ستاری ، روبروی شهرک اکباتان",
//       structure: "پل عابر",
//       area: 44,
//       dimensions: "1620*270",
//       locationX: 35.69914870400991,
//       locationY: 51.31284688637393,
//       same: "N1266",
//   }
]
