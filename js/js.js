var myChartOne = echarts.init(document.getElementById('completion-rate'));
var option = {
	title: {
		text: '累计预算完成率',
		left: 'center',
		top: '3%',
	},
	grid: {
		top: '40%',
		bottom: '20%'
	},
	tooltip: {},
	legend: {
		top: '12%',
		left: '5%',
		right: '5%',
		data: ['主营业务收入', '平均完成率', '移动用户净增', '智能机销量', '宽带净增用户', '光宽带净增用户', 'ITV净增用户'],
		selected: {
			'主营业务收入': true,
			'平均完成率': false,
			'移动用户净增': false,
			'智能机销量': false,
			'宽带净增用户': false,
			'光宽带净增用户': false,
			'ITV净增用户': false,
		}
	},
	xAxis: {
		data: ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "昌吉", "博乐"],
		axisLabel: {
			formatter: function(params) {
				// console.log(params);
				var length = params.length
				var str = '';
				// console.log(params.length)
				for (var i = 0; i < length; i++) {
					// console.log(params.charAt(i));
					str += params.charAt(i) + '\n';
				}
				return str;
			}
		}
	},
	yAxis: {},
	series: [{
		name: '主营业务收入',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}, {
		name: '平均完成率',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}

	}, {
		name: '移动用户净增',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}, {
		name: '智能机销量',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}, {
		name: '宽带净增用户',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}, {
		name: '光宽带净增用户',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}, {
		name: 'ITV净增用户',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20],
		markLine: {
			data: [{
				name: '最低标准线',
				yAxis: 30,
			}]
		}
	}]
};
myChartOne.setOption(option);
myChartOne.on('legendselectchanged', function(event) {
	var newOption = {
		legend: {
			selected: {
				'主营业务收入': true,
				'平均完成率': false,
				'移动用户净增': false,
				'智能机销量': false,
				'宽带净增用户': false,
				'光宽带净增用户': false,
				'ITV净增用户': false,
			}
		}
	}
	for (var attr in newOption.legend.selected) {
		if (attr == event.name) {
			newOption.legend.selected[attr] = true;
		} else {
			newOption.legend.selected[attr] = false;
		}
	}
	myChartOne.setOption(newOption);
});



var teamRate = echarts.init(document.getElementById('team-rate'));
var option = {
	title: {
		text: '经营单元优秀团队占比',
		left: 'center',
		top: '3%',
	},
	grid: {
		bottom: '25%'
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		},
		formatter: function(params) {
			var tar = params[0];
			return tar.name + ' : ' + tar.value + '%';
		}
	},
	xAxis: {
		data: ["城市支局", "农村支局", "政企清单", "核心商圈", "自营厅", "客户维系"],
		axisLabel: {
			formatter: function(params) {
				// console.log(params);
				var length = params.length
				var str = '';
				// console.log(params.length)
				for (var i = 0; i < length; i++) {
					// console.log(params.charAt(i));
					str += params.charAt(i) + '\n';
				}
				return str;
			}
		}
	},
	yAxis: {},
	series: [{
		name: '经营单元优秀团队占比',
		type: 'bar',
		data: [58.52, 45.74, 57.85, 45.96, 75.74, 52.36],
		label: {
			show: true,
			position: 'top',
			formatter: function(params) {
				return params.value + '%';
			}
		}
	}]
};
teamRate.setOption(option);



var cumulativeBudgetRate = echarts.init(document.getElementById('cumulative-budget-rate'));
var option = {
	title: {
		text: '累计预算完成率',
		left: 'center',
		top: '3%',
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		},
		formatter: function(params) {
			var tar = params[0];
			return tar.name + ' : ' + tar.value + '%';
		}
	},
	yAxis: {
		type: 'category',
		data: ["ITV净增用户", "光宽带净增用户", "宽带净增用户", "智能机销售 ", "移动用户净增", "主营业务收入"]
	},
	xAxis: {
		type: 'value',
	},
	grid: {
		left: '30%',
	},
	series: [{
		name: '累计预算完成率',
		type: 'bar',
		data: [58.52, 45.74, 57.85, 45.96, 75.74, 52.36],
		label: {
			show: true,
			position: 'insideRight',
			formatter: function(params) {
				return params.value + '%';
			}
		}
	}]
};
cumulativeBudgetRate.setOption(option);
