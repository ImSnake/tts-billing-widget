<script>
import {ref} from "vue";

export default {
  name: "Account",
  props: {
    accountData: {type: Object, required: true},
  },
  setup() {
    const bookmarkIsActive = ref(false);
    return {bookmarkIsActive};
  },
  mounted() {
    //console.log('Bookmark account is mounted');
  },
};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">
     <div class="elz d-table w100p pH16 pB16">

       <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn   bg bg-primary bgL5    stripSelCol4">
         <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
         <tr class="tr">
           <td class="td wmn240 h56">

             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut sel">

               <div class="elz d-block noShrink op025 opHovIn10 mR8">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/search.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('/dev/nportal/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Номер лицевого счета</div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <input type="text" class="elz p-abs s100p p-EA d-block bold z1 pV4 borB1 br br-focus visSelIn" placeholder="Введите номер счета">
                   <div class="elz d-block p-abs pT5 w100p hide">
                     <div class="elz d-block bsh bsh-default2 z2 r3 bg bg-primary bgL20 pV8">
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                     </div>
                   </div>
                 </div>
               </div>

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>

           </td>
           <td class="td w240 wmn240">

             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut sel">

               <div class="elz d-block noShrink op025 opHovIn10 mR8">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/cash.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('/dev/nportal/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24 grow">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Абон. плата: <b>64875.00</b></div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <select class="elz p-abs s100p p-EA d-block bold z1 pV4 cur-pointer borB1 br br-focus visSelIn">
                     <option class="bg bg-primary bgL5 bgLInvD">Выберите Абон. плату</option>
                     <option class="bg bg-primary bgL5 bgLInvD">234905876290348756983272342342343</option>
                     <option class="bg bg-primary bgL5 bgLInvD">6464637847344</option>
                     <option class="bg bg-primary bgL5 bgLInvD">82879829982833737</option>
                     <option class="bg bg-primary bgL5 bgLInvD">000</option>
                   </select>
                 </div>
               </div>

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>
           </td>
           <td class="td w64 wmn64">
             <div class="elz d-block bold">Рубль</div>
           </td>
           <td class="td w150 wmn150">
             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut">

               <div class="elz d-block noShrink op025 opHovIn10 mR8">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/calendar.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('/dev/nportal/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Период С</div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <input type="text" class="elz p-abs s100p p-EA d-block bold z1 pV4 borB1 br br-focus visSelIn" placeholder="Период С">
                   <div class="elz d-block p-abs pT5 w100p hide">
                     <div class="elz d-block bsh bsh-default2 z2 r3 bg bg-primary bgL20 pV8">
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                       <div class="d-block pV10 pH16 cur-pointer bgHov bg-primary fn fnHovL-10 fnHovLInvD fnSelLInvD opAct07">Autocomplete Item 1</div>
                     </div>
                   </div>
                 </div>
               </div>

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10 sel">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>
           </td>
           <td class="td w150 wmn150">
             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut sel">

               <div class="elz d-block noShrink op025 opHovIn10 mR8">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/calendar.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('/dev/nportal/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Период ПО</div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <input type="text" class="elz p-abs s100p p-EA d-block bold z1 pV4 borB1 br br-focus visSelIn" placeholder="Период ПО">










                   <div class="picker__mask hide"></div>
                   <div class="picker__frame pT8">
                     <div class="picker__warp">
                       <div class="picker__box">
                         <div class="picker__header">
                           <div class="picker__month">
                             <select>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                             </select>
                           </div>
                           <div class="picker__year">
                             <select>
                               <option value="2020">2020</option>
                               <option value="2021">2021</option>
                             </select>
                           </div>
                           <div class="picker__nav--prev"></div>
                           <div class="picker__nav--next"></div>
                         </div>
                         <table class="picker__table">
                           <thead>
                           <tr>
                             <th class="picker__weekday picker__weekend">Sun</th>
                             <th class="picker__weekday">Mon</th>
                             <th class="picker__weekday">Tue</th>
                             <th class="picker__weekday">Wed</th>
                             <th class="picker__weekday">Thu</th>
                             <th class="picker__weekday">Fri</th>
                             <th class="picker__weekday picker__weekend">Sat</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day--outfocus">27</div></td>
                             <td role="presentation"><div class="picker__day picker__day--outfocus">28</div></td>
                             <td role="presentation"><div class="picker__day picker__day--outfocus">29</div></td>
                             <td role="presentation"><div class="picker__day picker__day--outfocus">30</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--selected picker__day--highlighted">1</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled">2</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled">3</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled">4</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled">5</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus picker__day--disabled">6</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">7</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">8</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">9</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">10</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day--infocus">11</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">12</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">13</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">14</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">15</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">16</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">17</div>
                             </td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day--infocus">18</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">19</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">20</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">21</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">22</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">23</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">24</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day--infocus">25</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">26</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">27</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">28</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">29</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">30</div></td>
                             <td role="presentation"><div class="picker__day picker__day--infocus">31</div></td>
                           </tr>
                           </tbody>
                         </table>
                         <div class="picker__footer">
                           <button class="picker__button--today" type="button">Today</button>
                           <button class="picker__button--clear" type="button">Clear</button>
                           <button class="picker__button--close" type="button">Close</button>
                         </div>
                       </div>
                     </div>
                   </div>











                 </div>
               </div>

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('/dev/nportal/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>
           </td>
           <td class="td w120 wmn120">
             <div class="elz d-block bold">Доп. соглашение</div>
           </td>
           <td class="td w160 wmn160">
             <div class="elz d-block bold">Блокировка</div>
           </td>
           <td class="td w100 wmn100">
             <div class="elz d-block bold">Лицевой счет</div>
           </td>
           <td class="td w100 wmn100">
             <div class="elz d-block bold">Баланс</div>
           </td>
         </tr>
         </thead>
         <tbody class="elz tbody pad p8 stripOdd stripHover">
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         <tr class="tr">
           <td class="td">
             <div class="d-block pL32">71940168</div>
           </td>
           <td class="td bold">66963.4300</td>
           <td class="td">Рубль</td>
           <td class="td"><div class="d-block pL32">2021.01.13</div></td>
           <td class="td"><div class="d-block pL32">Неопределенно</div></td>
           <td class="td">Д/С № Н#999</td>
           <td class="td">Блокировка отсутствует</td>
           <td class="td"></td>
           <td class="td"></td>
         </tr>
         </tbody>
       </table>

     </div>
  </div>
</template>
