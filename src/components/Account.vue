<script>
import { ref } from "vue";
import { requestAccountData } from "@/requests/api";

export default {
  name: "Account",
  props: {
    ttsId: {
      type: [String, Number],
      required: true
    },
  },

  setup() {
    const bookmarkIsActive = ref(false);
    return { bookmarkIsActive };
  },

  data() {
    return {
      accountData: {},
    }
  },

  created() {
    this.getAccountData();
  },

  methods: {

    getAccountData() {

      if (this.ttsId) {
        const hydraResponse = requestAccountData(this.ttsId);

        hydraResponse.then((result) => {

          if(result.statusCode === 500) {
            console.log('ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ');
            console.log(result);
            return;
          }

          this.accountData = result;
          console.log(this.accountData);
        });
      }
    },

    toggleTableView(refName) {
      console.log(refName);
    }

  }
};
</script>

<template>
  <div v-if="bookmarkIsActive" class="d-block">
     <div class="elz d-table w100p pH16 pB16">

       <table class="elz elzTable w100p mT16 va-M fn-9 lh-12 r3 bsh-default1 uStrip stripLD borNoneIn bg bg-primary bgL5">
         <thead class="elz tbody pad p8 pV10 p-sticky p-T z1 bor borB2 br br-primary brL-5 brFD brLF20">
         <tr class="tr">
           <td class="td w120 h56 nowrap">
             <div ref="accountNumber" class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut">

               <div class="elz d-block noShrink op025 opHovIn10 mR8 invisible">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i @click="toggleTableView('accountNumber')" class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/search.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i @click="toggleTableView('accountNumber')" class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Номер лицевого счета</div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <!--<input type="text" class="elz p-abs s100p p-EA d-block bold z1 pV4 borB1 br br-focus visSelIn" placeholder="Введите номер счета">-->
                   <select class="elz p-abs s100p p-EA d-block bold z1 pV4 cur-pointer borB1 br br-focus visSelIn">
                     <option class="bg bg-primary bgL5 bgLInvD">Выберите Абон. плату</option>
                     <option class="bg bg-primary bgL5 bgLInvD">234905876290348756983272342342343</option>
                     <option class="bg bg-primary bgL5 bgLInvD">6464637847344</option>
                     <option class="bg bg-primary bgL5 bgLInvD">82879829982833737</option>
                     <option class="bg bg-primary bgL5 bgLInvD">000</option>
                   </select>
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

<!--               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10 hide">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>-->
             </div>
           </td>
           <td class="td">
             <div class="elz d-block bold pL32">Услуга</div>
           </td>
           <td class="td w160 al-right">
             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut">
               <div class="elz d-block noShrink op025 opHovIn10 mR8 hide">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cash.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24 grow">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold growX grY1 pV4 pT1 borB1 invSelIn">Абон. плата, ₽</div>
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

<!--               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="&#45;&#45;elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>-->

             </div>
           </td>
           <td class="td w120">
             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut">

               <div class="elz d-block noShrink op025 opHovIn10 mR8 invisible">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/calendar.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross1.svg');"></i>
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

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10 hide">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>
           </td>
           <td class="td w120">
             <div class="elz d-flex a-H opHovOut showSelOut hideSelOut visSelOut invSelOut">

               <div class="elz d-block noShrink op025 opHovIn10 mR8 invisible">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 hideSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/calendar.svg');"></i>
                 </div>
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07 showSelIn">
                   <i class="elz d-block s16 p-rel mskBef cFillBef bgBef-CC" title="Закрыть поиск" style="--elzMsk: url('https://lelouch.ru/uploads/icons/cross1.svg');"></i>
                 </div>
               </div>

               <div class="elz d-grid grPos hmn24">
                 <div class="elz d-flex a-H">
                   <div class="elz d-block bold grY1 pV4 pT1 borB1 invSelIn">Период ПО</div>
                 </div>
                 <div class="elz p-rel d-block grY1">
                   <div class="elz h100p evNone"></div>
                   <input type="text" class="elz p-abs s100p p-EA d-block bold z1 pV4 borB1 br br-focus visSelIn" placeholder="Период ПО">

<!--                   <div class="picker__mask hide"></div>-->
<!--                   <div class="picker__frame pT8">
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
                           <div class="picker__nav&#45;&#45;prev"></div>
                           <div class="picker__nav&#45;&#45;next"></div>
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
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;outfocus">27</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;outfocus">28</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;outfocus">29</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;outfocus">30</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;selected picker__day&#45;&#45;highlighted">1</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;disabled">2</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;disabled">3</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;disabled">4</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;disabled">5</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus picker__day&#45;&#45;disabled">6</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">7</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">8</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">9</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">10</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">11</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">12</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">13</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">14</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">15</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">16</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">17</div>
                             </td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">18</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">19</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">20</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">21</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">22</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">23</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">24</div></td>
                           </tr>
                           <tr>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">25</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">26</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">27</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">28</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">29</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">30</div></td>
                             <td role="presentation"><div class="picker__day picker__day&#45;&#45;infocus">31</div></td>
                           </tr>
                           </tbody>
                         </table>
                         <div class="picker__footer">
                           <button class="picker__button&#45;&#45;today" type="button">Today</button>
                           <button class="picker__button&#45;&#45;clear" type="button">Clear</button>
                           <button class="picker__button&#45;&#45;close" type="button">Close</button>
                         </div>
                       </div>
                     </div>
                   </div>-->

                 </div>
               </div>

               <div class="elz d-block noShrink op0 opHovIn10 mL4 opSel10 hide">
                 <div class="elz d-flex s24 a-X rCircle cur-pointer opAct07">
                   <i class="elz d-block s8 p-rel mskBef cFillBef bgBef-CC" title="Поиск по столбцу" style="--elzMsk: url('https://lelouch.ru/uploads/icons/arrow1.svg');"></i>
                 </div>
               </div>

             </div>
           </td>
           <td class="td w100 al-right">
             <div class="elz d-block bold">Баланс, ₽</div>
           </td>
           <td class="td w120 nowrap">
             <div class="elz d-block bold pH32">Дата операции</div>
           </td>
         </tr>
         </thead>
         <tbody class="elz tbody pad p8 stripOdd stripHover">
         <template v-for="accountItem in accountData">
           <tr v-for="paymentItem in accountItem.payment" class="tr">
             <td class="td">
               <div class="d-block pL32">{{ accountItem.accountNumber }}</div>
             </td>
             <td class="td">
               <div class="d-block pL32">{{ paymentItem.paidServiceName }}</div>
             </td>
             <td class="td bold al-right">{{ paymentItem.paymentSum }}</td>
             <td class="td">
               <div class="d-block pL32">{{ paymentItem.paidPeriodBeginDateTime }}</div>
             </td>
             <td class="td">
               <div class="d-block pL32">{{ paymentItem.paidPeriodEndDateTime }}</div>
             </td>
             <td class="td al-right">{{ paymentItem.accountBalance }}</td>
             <td class="td">
               <div class="d-block pL32">{{ paymentItem.payOperationDateTime }}</div>
             </td>
           </tr>
         </template>
         </tbody>
       </table>
     </div>
  </div>
</template>
