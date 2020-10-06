module.exports = function toReadable(number) {
   let num = [...String(number)].map(Number),
      a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
      b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   if (number == 0) {
      return `zero`;
   }

   if (number < 11) {
      return `${a[number - 1]}`;
   }

   if (number > 10 && number < 20) {
      return `${b[number - 11]}`;
   }

   if (number > 19 && number < 100) {
      if (num[1] == 0) {
         return `${c[num[0] - 2]}`;
      } else {
         return `${c[num[0] - 2]} ${a[num[1] - 1]}`;
      }
   }

   if (number > 99 && number < 1000) {
      if (num[1] == 0 && num[2] == 0) {
         return `${a[num[0] - 1]} hundred`;
      } else if (num[1] == 0) {
         return `${a[num[0] - 1]} hundred ${a[num[2] - 1]}`;
      } else if (num[1] == 1 && num[2] == 0) {
         return `${a[num[0] - 1]} hundred ten`;
      } else if (num[1] == 1) {
         return `${a[num[0] - 1]} hundred ${b[num[2] - 1]}`;
      } else if (num[2] == 0) {
         return `${a[num[0] - 1]} hundred ${c[num[1] - 2]}`;
      } else {
         return `${a[num[0] - 1]} hundred ${c[num[1] - 2]} ${a[num[2] - 1]}`;
      }
   }
}

