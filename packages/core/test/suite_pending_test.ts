// Copyright 2022 Testdeck Team and Contributors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { describe, it } from "mocha";

import { assert } from "chai";

import { LoggingClassTestUI } from "./util";

describe("@Suite.Pending(...)", function() {
    describe("@Suite.Pending() - unconditional pending", function() {
        const loggingClassTestUI: LoggingClassTestUI = new LoggingClassTestUI();

        const {
            Suite,
        } = loggingClassTestUI;

        @Suite.Pending()
        class TestSuite {
        }

        it("everything is declared, registered and executed in the correct order", () => {
            assert.deepEqual(loggingClassTestUI.loggingAdapter.suite, {
                suiteSymbolIsSet: true,
                inheritanceWasPrevented: false,
                describeWasCalled: true,
                constructorWasCalled: true,
                userOptions: {},
                effectiveOptions: {
                    condition: true,
                    execution: "pending",
                    name: "TestSuite"
                },
                children: [],
                childSuites: [],
                executionOrder: []
            }, "TestSuite");
        });
    });

    describe("@Suite.Pending({ condition: true }) - conditional pending", function() {
        const loggingClassTestUI: LoggingClassTestUI = new LoggingClassTestUI();

        const {
            Suite,
        } = loggingClassTestUI;

        @Suite.Pending({ condition: true })
        class TestSuite {
        }

        it("everything is declared, registered and executed in the correct order", () => {
            assert.deepEqual(loggingClassTestUI.loggingAdapter.suite, {
                suiteSymbolIsSet: true,
                inheritanceWasPrevented: false,
                describeWasCalled: true,
                constructorWasCalled: true,
                userOptions: {
                    condition: true
                },
                effectiveOptions: {
                    condition: true,
                    execution: "pending",
                    name: "TestSuite"
                },
                children: [],
                childSuites: [],
                executionOrder: []
            }, "TestSuite");
        });
    });

    describe("@Suite.Pending({ condition: false }) - conditional non-pending", function() {
        const loggingClassTestUI: LoggingClassTestUI = new LoggingClassTestUI();

        const {
            Suite,
        } = loggingClassTestUI;

        @Suite.Pending({ condition: false })
        class TestSuite {
        }

        it("everything is declared, registered and executed in the correct order", () => {
            assert.deepEqual(loggingClassTestUI.loggingAdapter.suite, {
                suiteSymbolIsSet: true,
                inheritanceWasPrevented: false,
                describeWasCalled: true,
                constructorWasCalled: true,
                userOptions: {
                    condition: false
                },
                effectiveOptions: {
                    condition: false,
                    execution: "pending",
                    name: "TestSuite"
                },
                children: [],
                childSuites: [],
                executionOrder: []
            }, "TestSuite");
        });
    });
});
