/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  sum = 0;
  for (start; start<=end; start++) {
    if (start%2==0) {
      sum+=start;
    }
  }
  return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  counter = 0;
  while (a>0.1) {
    counter +=1
    a/=2
  }
  return counter;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let length = message.length
  if (length<2) {
    return message
  } else {
  for (let l=3; l<length; l+=3) {
    message = message.substring(0,l) + '_' + message.substring(l+1, length-1)
  }
  return message
}
}
