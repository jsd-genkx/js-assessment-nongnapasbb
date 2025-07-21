# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**
สร้างสนามที่ใช้เล่นเกม ขอเรียกว่าบอร์ด
บอร์ดอันนี้มีลักษณะเป็น array 2 มิติ เอา array ซ้อน array แล้วเติมของเข้าไปในตำแหน่งต่างๆ โดยมีหนึ่งตำแหน่งใส่ตัวผู้เล่น หนึ่งตำแหน่งใส่หมวก สองตำแหน่งใส่หลุม และตำแหน่งอื่นๆ ใส่ สนามเข้าไป จากนั้นก็สร้าง class ที่ชื่อว่า field ขึ้นมา เพื่อให้ง่ายต่อการจัดการบอร์ดและ logic ต่างๆ

กลับมาที่การเล่นเกม ทุกครั้งที่รันไฟล์บน **terminal จะมีการโชว์บอร์ดที่ใช้เล่น พร้อมกับ prompt เพื่อให้ผู้เล่นสามารถพิมพ์คำสั่งเดินหมาก โดยทำแบบนี้วนไปเรื่อยๆจนกว่าจะจบเกม ดังนั้นสิ่งที่จะทำคือใช้ while loop**

ทุกครั้งที่ผู้เล่นจะขยับ โปรแกรมจะมีการทำงานแบบนี้

1. โปรแกรมต้องรู้ตำแหน่งปัจจุบันของผู้เล่นก่อน
2. พอรู้ตำแหน่งปัจจุบันของผู้เล่น จะต้องหาตำแหน่งถัดไปของผู้เล่นต่อ
3. พอเจอตำแหน่งถัดไปของผู้เล่น ระบบจะเช็คว่าตำแหน่งนั้นตรงกับเงื่อนไขไหนบ้าง
   - ถ้าเจอสนาม ผู้เล่นเคลื่อนที่ได้ มีการอัปเดตตำแหน่ง เกมจะดำเนินต่อตามลูป
   - ถ้าเจอหลุม ผู้เล่นแพ้ และจบเกม
   - ถ้าเจอหมวก ผู้เล่นชนะ และจบเกม
   - ถ้าออกจากบอร์ด ผู้เล่นแพ้ และจบเกม
4. เมื่อเช็คเรียบร้อย ผู้เล่นเคลื่อนที่ จะมีข้อความแจ้งเตือนว่าผู้เล่นชนะ แพ้ หรือยังเล่นต่อได้ ก่อนขึ้นลูปใหม่
5. เมื่อขึ้นลูปใหม่ มีการโชว์บอร์ดพร้อม prompt อีกครั้ง แต่เป็นบอร์ดที่ถูกอัพเดตเส้นทางการเดินที่ผ่านมาของผู้เล่น
6. เกมดำเนินไปเรื่อยๆ จนกว่าจะจบเกม
7. ทุกครั้งที่เริ่มเกมใหม่ จะสุ่มตำแหน่งของหมวก, หลุม และตำแหน่งเริ่มต้นของผู้เล่นใหม่ทั้งหมด

---

### Thinking Process

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
