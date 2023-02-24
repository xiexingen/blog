---
title: Utility Types
order: 1000
nav:
  title: 笔记
group:
  title: 技巧
---

# Typescript 工具类型

## Partial`<Type>`

将指定类型的全部属性变成可空类型

<code src="./_demos/ts/utility-types/partial.tsx"></code>

## Required`<Type>`

将指定类型的全部属性变成必选类型，与 Partial 相反

<code src="./_demos/ts/utility-types/required.tsx"></code>

## Readonly`<Type>`

将指定类型的全部属性变成只读；意味着一旦初始化不能在进行修改属性值;

<code src="./_demos/ts/utility-types/readonly.tsx"></code>

## Record`<Keys,Type>`

`Record<Keys,Type>` 定义一个键为 K 值为 V 的类型的对象；还有种写法`{[key:Keys]:Type}`

<code src="./_demos/ts/utility-types/record.tsx"></code>

## Pick`<Type,Keys>`

`Pick<Type,Keys>` 定义一个 T 中属性名在 K 集合中的新类型

<code src="./_demos/ts/utility-types/pick.tsx"></code>

## Omit`<Type,Keys>`

`Omit<Type,Keys>` 定义一个 T 中属性名不在 K 集合中的新类型，与 Pick 相反

<code src="./_demos/ts/utility-types/omit.tsx"></code>

## Extract`<Type,Union>`

`Extract<Type, Union>` 定义一个从 Type 类型选题 Union 的新类型，与 Exclude 相反

<code src="./_demos/ts/utility-types/extract.tsx"></code>

## Exclude`<UnionType,ExcludedMembers>`

`Exclude<UnionType,ExcludedMembers>` 定义一个从 UnionType 类型中排除掉 ExcludedMembers 的新类型，与 Extract 相反

<code src="./_demos/ts/utility-types/exclude.tsx"></code>

## NonNullable`<Type>`

`NonNullable<Type>` 从 Type 定义一个新类型，约束里面的属性不能为 null 和 undefined

<code src="./_demos/ts/utility-types/non-nullable.tsx"></code>

## Parameters`<Type>`

`Parameters<Type>` 从函数类型的参数中使用的类型构造元组类型

<code src="./_demos/ts/utility-types/parameters.tsx"></code>

## ConstructorParameters`<Type>`

`ConstructorParameters<Type>` 从构造函数类型的类型构造元组或数组类型。 它产生一个包含所有参数类型的元组类型（如果 Type 不是函数，则类型 never ）。

<code src="./_demos/ts/utility-types/constructor-parameters.tsx"></code>

## ReturnType`<Type>`

`ReturnType<Type>`构造一个由函数 Type 的返回类型组成的类型

<code src="./_demos/ts/utility-types/return-type.tsx"></code>

## InstanceType`<Type>`

`InstanceType<Type>`构造一个由 Type 中构造函数的实例类型组成的类型

<code src="./_demos/ts/utility-types/instance-type.tsx"></code>

## ThisParameterType`<Type>`

`ThisParameterType<Type>`提取函数类型的 this 参数的类型，如果函数类型没有 this 参数，则为未知

> 这个没感觉到有啥用处

<code src="./_demos/ts/utility-types/this-parameter-type.tsx"></code>

## OmitThisParameter`<Type>`

`OmitThisParameter<Type>` 从 Type 中移除 this 参数。 如果 Type 没有显式声明此参数，则结果只是 Type。 否则，从 Type 创建一个不带此参数的新函数类型。 泛型被删除，只有最后一个重载签名被传播到新的函数类型中

> 这个也没感觉到有啥用处

<code src="./_demos/ts/utility-types/omit-this-parameter.tsx"></code>

## ThisType`<Type>`

`ThisType<Type>` 此实用程序不返回转换后的类型。 相反，它用作上下文这种类型的标记。 请注意，必须启用 noImplicitThis 标志才能使用此实用程序。

<code src="./_demos/ts/utility-types/this-type.tsx"></code>

## Uppercase`<Type>`

`Uppercase<Type>` 将字符串中的每个字符转换为大写版本。

<code src="./_demos/ts/utility-types/uppercase.tsx"></code>

## Lowercase`<Type>`

`Lowercase<Type>` 将字符串中的每个字符转换为小写版本。

<code src="./_demos/ts/utility-types/lowercase.tsx"></code>

## Capitalize`<Type>`

`Capitalize<Type>` 将字符串中的首字母大写。

<code src="./_demos/ts/utility-types/capitalize.tsx"></code>

## Uncapitalize`<Type>`

`Uncapitalize<Type>` 将字符串中的第一个字符转为小写。

<code src="./_demos/ts/utility-types/un-capitalize.tsx"></code>
