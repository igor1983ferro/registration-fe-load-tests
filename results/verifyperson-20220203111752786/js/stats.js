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
        "total": "7811",
        "ok": "7811",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10089",
        "ok": "10089",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8590",
        "ok": "8590",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8422",
        "ok": "8422",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8904",
        "ok": "8904",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9959",
        "ok": "9959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10063",
        "ok": "10063",
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
        "total": "0.909",
        "ok": "0.909",
        "ko": "-"
    }
},
contents: {
"req_validate-person-fb86b": {
        type: "REQUEST",
        name: "Validate Person",
path: "Validate Person",
pathFormatted: "req_validate-person-fb86b",
stats: {
    "name": "Validate Person",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7811",
        "ok": "7811",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10089",
        "ok": "10089",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8590",
        "ok": "8590",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8422",
        "ok": "8422",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8904",
        "ok": "8904",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9959",
        "ok": "9959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10063",
        "ok": "10063",
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
        "total": "0.909",
        "ok": "0.909",
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
