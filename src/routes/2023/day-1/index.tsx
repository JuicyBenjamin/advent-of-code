import { component$ } from "@builder.io/qwik";
import { stringArray } from "./stringArray";

const string = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

const validDigits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export default component$(() => {
  const answer1 = stringArray
    .map((str) => {
      const filteredNumbers = str.split("").filter((char) => {
        return !isNaN(parseInt(char));
      });
      const firstNumber = filteredNumbers[0];
      const lastNumber = filteredNumbers[filteredNumbers.length - 1];
      return firstNumber + lastNumber;
    })
    .reduce((prev, curr) => (parseInt(prev) + parseInt(curr)).toString());

  const answer2 = string.map((str) => {
    return Object.keys(validDigits)
      .map((digits) => {
        if (str.includes(digits)) {
          return validDigits[digits];
        }
      })
      .filter((number) => Boolean(number));
  });

  console.log(answer2);
  return (
    <div>
      <p>{answer1}</p>
      <p>{answer2}</p>
    </div>
  );
});
