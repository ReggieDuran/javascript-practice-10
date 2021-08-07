function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);

    let priceCategory = 'pretty cheap';
    if (productPrice > 20) {
        priceCategory = 'fairly priced';
    }
    
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}`;
    return {name: productName, price: productPrice};
}

const prodName = 'Javascript Course';
const prodPrice = '29.99';

const productOutput = productDescription`This is (${prodName}) is ${prodPrice}`;
console.log(productOutput);

// const regex = /hello/;