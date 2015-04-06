# React Native Demo


## 如何运行

1. 先确保你已安装好了React Native 所需的依赖环境
2. 在根目录下执行 `npm install`
3. 再执行 `npm start`
4. 最后在`Xcode`中点击`run` 运行 或者按 `command + R`

### 可能遇到的问题

#### error 1003 错误

在家开着VPN写代码，一般会遇到该问题，解决方法： 

打开项目中的`AppDelegate.m`，找到这行代码：`jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"]`，将`localhost`换成自己的`ip`


## 一点经验

### 图片自适应

react native 中，图片必须明确写明大小值，不然无法显示，同时`width : '100%''`,这种写法不支持。

如果需要自适应，有几种做法：

* 只写高度值，不写宽度值，外层容器使用`flex`来做好布局，再配合`resizeMode`实现图片自适应即可。
	
	例子1 : 
	
	```
	<View style={{flex : 1,borderRightWidth : 1,borderRightColor: '#eeeeee'}}>
                    <Image style={{height: 110,resizeMode: Image.resizeMode.contain}} source={{uri: 'http://gtms01.alicdn.com/tps/i1/TB1nif8HpXXXXc6XVXXAyLxZVXX-320-188.jpg'}} />
                </View>
	```
	例子2 :
	
	```
	<View style={{
	  flex: 1,
	  alignItems: 'stretch',
	}}>
	  <Image ssource={{uri: 'http://gtms01.alicdn.com/tps/i1/TB1nif8HpXXXXc6XVXXAyLxZVXX-320-188.jpg'}} style={{ flex: 1 }} />
	</View>
	```
	
* 使用`Dimensions`来获取设备viewport的宽高

	```
	var Dimensions = require('Dimensions');
	var { width, height } = Dimensions.get('window');
	var image = (
	  <Image style={{width: width, height: 100 }} source={{uri: 'http://gtms01.alicdn.com/tps/i1/TB1nif8HpXXXXc6XVXXAyLxZVXX-320-188.jpg'}} />
	);
	```

## 关于layout-css 

react-native(rn)中使用`flex`来布局，目前使用来看，配合`positon : 'absolute'`是能够满足基本页面布局需求的。

但是`rn`中没有`zIndex`，也没有`position : 'fixed'`，在复杂的页面布局中，会稍微有点麻烦，但还是能实现类似的效果。

`rg`中只实现了css中很小的一个子集，还有很多属性值无法使用，并且属性写法繁琐，如在web中的css 如果要写`padding : 10px 5px 15px 20px`,在`ng`中则全部要分开属性写:`paddingTop : 10,paddingRight : 5 ...` 感觉一夜回到解放前。。

`positon : 'absolute'`定位方式是相对于父级元素，不管父级是否具有`relative`。

缺少一些常用的css属性，如中划线及截断省略号.

h5页面：

![image](http://img3.tbcdn.cn/5476e8b07b923/TB1V7AFHpXXXXaSXpXXXXXXXXXX)

rg页面：

![image](http://img3.tbcdn.cn/5476e8b07b923/TB1IkkAHpXXXXcCXVXXXXXXXXXX)


## 最终效果图

![image](http://img3.tbcdn.cn/5476e8b07b923/TB1QzADHpXXXXXFXFXXXXXXXXXX)

