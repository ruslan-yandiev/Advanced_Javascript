### Сделаем свой класc для работы с DOM элементами

Понадобится создать базовый класс HtmlElement в котором будут содержаться все общие методы для элементов, а также несколько классов для конкретных элементов

##### class HtmlElement
- _target - текущий DOM element в который будет произведена отрисовка
- _render - Метод для отрисовки объекта
- _unrender - удаляет созданный DOM element со страницы
- setter template - задает шаблон в виде строки, механизм замены можно использовать любой, но очень желательно не использовать дата атрибуты
- setter variables - задает список переменных которые должны быть подставлены в шаблон, если в свойстве передана строка - подставить ее, если функция - вызвать ее и подставить ее результат
- setter target - Если передаем DOM элемент то записываем его в свойство _target, если нет - выводим сообщение об ошибке
- setter styles, позволяет передать стили в виде объекта и присвоить их в атрибут style
- render() - вызывает _render
- unrender() - вызывает _render

##### class Input
- onInput, принимает функцию
- onFocus, принимает функцию

##### class Div
- сеттер onClick, принимает функцию

> Важное требование: изменения должны применяться на лету, т.е. если мы меняем значение цвета, оно сразу же должно примениться

Пример использования:
```javascript
const someElement = new Div()

someElement.template = `<div>{{output}}</div>`
someElement.variables = {
	output: 'Some text'
}
// Цвет текста синий

someElement.styles = {
	color: 'red'
}
someElement.render()
someElement.onClick = () => {
	console.log('test')
}
// Цвет текста синий
someElement.styles = {
	color: blue
}
someElement.unrender()
```