var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1341",
        "ok": "1341",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1678",
        "ok": "1678",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1466",
        "ok": "1466",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1509",
        "ok": "1509",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1652",
        "ok": "1652",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1673",
        "ok": "1673",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
},
contents: {
"req_verify-cep-98b18": {
        type: "REQUEST",
        name: "Verify Cep",
path: "Verify Cep",
pathFormatted: "req_verify-cep-98b18",
stats: {
    "name": "Verify Cep",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1341",
        "ok": "1341",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1678",
        "ok": "1678",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1466",
        "ok": "1466",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1509",
        "ok": "1509",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1652",
        "ok": "1652",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1673",
        "ok": "1673",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
