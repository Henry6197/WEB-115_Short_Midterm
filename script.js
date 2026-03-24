function calculateAmortization() {
    const principal = parseFloat(document.getElementById('loanamount').value);
    const annualRate = parseFloat(document.getElementById('intrestrate').value)/100;
    const years = parseFloat(document.getElementById('loanterm').value);
    const monthlyrate = annualRate/12;
    const numberofpayments=years*12
    const x = Math.pow(1+monthlyrate, numberofpayments);
    const monthlypayments = (principal * x * monthlyrate)/(x-1);
    let remainingbalance=principal;
    const tablebody = document.getElementById('schedulebody');
    tablebody.innerHTML = "";
        for(let i=1; i<= numberofpayments; i++){
            const intrestpayment = remainingbalance * monthlyrate;
            const principalpaid = monthlypayments - intrestpayment;
            remainingbalance -= principalpaid;
            const row = HTMLBaseElement<tr>
            HTMLBaseElement<td>$<script>{i} 
            HTMLBaseElement<td>$<script> monthlypayments.toFixed(2)
            HTMLBaseElement<td>$principalpaid.toFixed(2)
            HTMLBaseElement<td>$intrestpayment.toFixed(2)
            HTMLBaseElement<td>$Math.max(0, remainingbalance).toFixed(2);
        }
        tablebody.innerHTML+=row;
}