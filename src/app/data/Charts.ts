export const salesPerWeekData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets:[
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Per Week',
        backgroundColor: '#449DD1'
      }
    ]

  }

  export const salesByMonthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets:[{
      data: [132,302,153,200,432,431,331,432,531,323,300,400],
      label: 'Monthly Sales',
      backgroundColor: '#449DD1'
    },
    
  ]
  }


  export const salesByCategoryData = {
    labels: ['Mobiles & Gadgets', 'Laptops & Computers', "Men's Apparel", "Women's Apparel", 'Men Shoes', 'Women Shoes', 'Makeup & Fragnances', 'Health & Personal Care', "Men's Bags & Accessories", "Women's Bags & Accessories"],
    datasets:[{
      data: [10,5,20,21,5,10,50,30,20,100],
      label: 'Sales by Category',
    },
  ]
  }

  export const salesByCategoryLineData = {
    labels: ['Mobiles & Gadgets', 'Laptops & Computers', "Men's Apparel", "Women's Apparel", 'Men Shoes', 'Women Shoes', 'Makeup & Fragnances', 'Health & Personal Care', "Men's Bags & Accessories", "Women's Bags & Accessories"],
    datasets:[{
      data: [10,5,20,21,5,10,50,30,20,100],
      label: 'Sales by Category',
      backgroundColor: '#449DD1',
      borderColor: '#449DD1'
    },
  ]
  }