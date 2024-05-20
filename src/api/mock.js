//引入mockjs
import Mock from 'mockjs'

Mock.setup({
  timeout: '200-500'
})

// 获取 mock.Random 对象
const Random = Mock.Random

Mock.mock('/mock/data', 'post', (req) => {
  const query = JSON.parse(req.body)
  const list = []
  for (let i = 0; i < query.size; i++) {
    let listObject = {
      name: Random.cname(),
      age: Mock.mock('@float(20, 80,0,0)'),
      email: Mock.mock('@email'),
      id: Mock.mock('@id'),
      decs: Mock.mock('@cparagraph'),
      date: Mock.mock('@date(yyyy-MM-dd)')
    }
    list.push(listObject)
  }
  return { success: true, msg: '', data: { list, total: 100 } }
})

Mock.mock('/mock/login', 'post', (req) => {
  const query = JSON.parse(req.body)
  const userInfo = {
    name: query.account,
    role: query.account,
    age: Mock.mock('@float(20, 80,0,0)'),
    email: Mock.mock('@email'),
    id: Mock.mock('@id'),
    decs: Mock.mock('@cparagraph'),
    date: Mock.mock('@date(yyyy-MM-dd)'),
    token: 'xxxxxxxxtoken',
    portrait: 'http://dummyimage.com/200x200/333333/ffffff&text=' + query.account
  }
  if (['admin', 'user'].includes(query.account)) {
    return { success: true, msg: '', data: userInfo }
  } else {
    return { success: false, msg: '请输入正确的账号', data: {} }
  }
})
