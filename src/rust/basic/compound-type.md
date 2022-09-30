---
title: 复合类型
order: 8
nav:
  title: Rust
  path: /rust
group:
  title: 基础知识
  path: /basic
  order: 5
---

# 复合类型

## 字符串

rust 中的字符串与其他语言会不一样

```bash
let str="test"; // 这样返回的不是 String 类型，而是一个 &str
```

### push

在原有的字符串上追加,并不会返回新的字符串，由于字符串追加是操作修改原来的字符串，所以该字符串必须是可变的，即 `字符串变量必须由 mut 关键字修饰`

```bash
let mut str=String::from("hello ");
str.push("word");
```

### insert

insert(index,char)

往指定下标位置插入单个字符，下标不能越界，同样需要 mut

```bash
let mut str=String::from("hello ");
str.insert(4,',');
```

### insert_str

insert_str(index,string)

往指定下标插入字符串，下标不能越界，同样需要 mut

```bash
let mut str=String::from("hello ");
str.insert_str(4,"test");
```

### replace

替换字符串中的某部分字符串

replace(from,to)

```bash
let str = String::from("Hello,word");
let new_str = str.replace("word", "world");
println!("{}",new_str);
```

### replacen

replacen(pat,to,count) 接受三个参数，前两个与 replace 一样，第三个表示替换的个数，`该方法返回一个新的字符串，而不是操作原来的字符串`

```bash
let str = String::from("Hello,word,word");
let new_str = str.replacen("word", "world",1);
println!("{}",new_str); // Hello,world,word 只会替换掉第一个
```

### replace_range

replace_range(range,replace_with) replace_range 接收两个参数，第一个参数是要替换字符串的范围（Range），第二个参数是新的字符串，该方法是直接操作原来的字符串，不会返回新的字符串。该方法需要使用 mut 关键字修饰

```bash
let mut str = String::from("Hello,word,word");
str.replace_range(1..3,"XXG");
println!("{}",str);
```

### 删除

删除，有 pop、remove、truncate、clear

#### pop

删除并返回字符串的最后一个字符，`该方法是直接操作原来的字符串`

#### remove

删除并返回字符串中指定位置的字符,`该方法是直接操作原来的字符串`

#### truncate

删除字符串中从指定位置开始到结尾的全部字符,无返回值,`该方法是直接操作原来的字符串`

#### clear

清空字符串,`该方法是直接操作原来的字符串`

#### 连接

用 `+`或者`+=`连接，返回一个新字符串

#### 字符串转义

#### 操作 UTF-8 字符串

如果想要以 Unicode 方式遍历字符串，最好的办法就是使用 chars 方法

```bash
for c in "中国人"
```

#### 字节

返回字符串的底层字节数组表现形式

```bash
for c in "中国人".bytes(){
  println!("{}",c);
}
```

## 切片

切片允许你引用集合中部分连续的元素序列

```bash
let s = String::from("hello");
let slice1=&s[0..2]; // he，从下标0 开始到下标2结束(不含2)
let slice2=&s[..2]; // 与上面的效果是一样的

// 注：对字符串使用切片的时候要格外注意边界位置，也就是 UTF-8字符的边界(中文在UTF-8中占用3个字节)
let chinese = "中国人";
let chin = &chinese[0..2]; // 会报错，中 占用的是3个字节，改成3 会返回 中
println!("{}",chin);
```

## 元祖

## 结构体

## 枚举

## 数组
