# Backend do MVP aplicativo Entendeu?



Rotas da RESTfull API:
 
| METODO | ROTAS     | REQ                                                | RES                                |
|--------|-----------|----------------------------------------------------|------------------------------------|
| POST | /room || {roomId, studentCode, teacherCode} |
| POST | /question | {roomId, content, alternativeA, alternativeB, alternativeC, alternativeD, correct} ||
| POST | /enjoy | {studentCode} | questions[{question}] |
| POST | /answer | {questionId, alternative} ||
| POST | /stats | {teacherCode} | questions[{question}] |
