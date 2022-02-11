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
        "total": "2298",
        "ok": "2298",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3003",
        "ok": "3003",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2697",
        "ok": "2697",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2790",
        "ok": "2790",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2879",
        "ok": "2879",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2959",
        "ok": "2959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2994",
        "ok": "2994",
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
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_verify-email-a55ef": {
        type: "REQUEST",
        name: "Verify Email",
path: "Verify Email",
pathFormatted: "req_verify-email-a55ef",
stats: {
    "name": "Verify Email",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2298",
        "ok": "2298",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3003",
        "ok": "3003",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2697",
        "ok": "2697",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2790",
        "ok": "2790",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2879",
        "ok": "2879",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2959",
        "ok": "2959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2994",
        "ok": "2994",
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
        "total": "2.5",
        "ok": "2.5",
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
