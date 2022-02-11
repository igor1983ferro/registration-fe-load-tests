var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "0",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "1443",
        "ok": "-",
        "ko": "1443"
    },
    "maxResponseTime": {
        "total": "1932",
        "ok": "-",
        "ko": "1932"
    },
    "meanResponseTime": {
        "total": "1625",
        "ok": "-",
        "ko": "1625"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "-",
        "ko": "123"
    },
    "percentiles1": {
        "total": "1588",
        "ok": "-",
        "ko": "1588"
    },
    "percentiles2": {
        "total": "1693",
        "ok": "-",
        "ko": "1693"
    },
    "percentiles3": {
        "total": "1859",
        "ok": "-",
        "ko": "1859"
    },
    "percentiles4": {
        "total": "1927",
        "ok": "-",
        "ko": "1927"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
        "total": "40",
        "ok": "0",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "1443",
        "ok": "-",
        "ko": "1443"
    },
    "maxResponseTime": {
        "total": "1932",
        "ok": "-",
        "ko": "1932"
    },
    "meanResponseTime": {
        "total": "1625",
        "ok": "-",
        "ko": "1625"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "-",
        "ko": "123"
    },
    "percentiles1": {
        "total": "1588",
        "ok": "-",
        "ko": "1588"
    },
    "percentiles2": {
        "total": "1693",
        "ok": "-",
        "ko": "1693"
    },
    "percentiles3": {
        "total": "1859",
        "ok": "-",
        "ko": "1859"
    },
    "percentiles4": {
        "total": "1927",
        "ok": "-",
        "ko": "1927"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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