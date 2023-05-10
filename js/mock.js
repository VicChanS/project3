import Mock from 'mockjs'

Mock.mock('http://www.test.com', {

    "ListInfo|5": [{

        "img": Mock.Random.image('50x50')

    }]

});