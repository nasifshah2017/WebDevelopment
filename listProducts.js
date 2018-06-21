var faker = require('faker');

for (var i = 0; i <= 10; i++){
console.log(faker.fake("{{commerce.productName}}, - $ {{commerce.price}}"));
}

/** nasifshah:~/workspace $ mkdir MyShop
nasifshah:~/workspace $ cd MyShop
nasifshah:~/workspace/MyShop $ touch listProducts.js
nasifshah:~/workspace/MyShop $ npm install faker
chat-example@0.0.0 /home/ubuntu/workspace
└── faker@4.1.0 

npm WARN chat-example@0.0.0 No repository field.
npm WARN chat-example@0.0.0 No license field.

nasifshah:~/workspace/MyShop $ node listProducts.js
Ergonomic Fresh Bacon, - $ 761.00
Practical Wooden Keyboard, - $ 724.00
Unbranded Granite Gloves, - $ 9.00
Incredible Fresh Hat, - $ 19.00
Intelligent Plastic Ball, - $ 521.00
Refined Plastic Pants, - $ 943.00
Generic Rubber Bacon, - $ 304.00
Ergonomic Steel Chair, - $ 106.00
Handcrafted Rubber Soap, - $ 290.00
Ergonomic Steel Sausages, - $ 812.00
Gorgeous Concrete Sausages, - $ 59.00
nasifshah:~/workspace/MyShop $ **/