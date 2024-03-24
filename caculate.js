const perCost = document.getElementById('perCost');
const prize = document.getElementById('prize');
const holeCount = document.getElementById('holeCount');
const expect = document.getElementById('expect');
const winningRate = document.getElementById('winningRate');

var caculate = function() {
	var perCostVal = Number(perCost.value);
	var prizeVal = Number(prize.value);
	var holeCountVal = Number(holeCount.value);
	if(perCostVal && prizeVal && holeCountVal){
		var expectVal = 0;
		var winningRateVal = 0;
		var grandTotal = 0;
		for (var i = 0; i < 200; i++) {
			grandTotal +=  (perCostVal * (i + 1) - prizeVal) * (1 / holeCountVal)
			if(i + 1 === holeCountVal){
				expectVal += grandTotal;
			}
			if(prizeVal - perCostVal * (i + 1) < 0 && prizeVal - perCostVal * i >= 0){
				winningRateVal += (i + 1) * (1 / holeCountVal);
			}
		}
		expect.value = expectVal;
		winningRate.value = ((1 - winningRateVal) * 100).toFixed(1) + '%';
	}
	
}
perCost.addEventListener("blur", caculate);
prize.addEventListener("blur", caculate);
holeCount.addEventListener("blur", caculate);