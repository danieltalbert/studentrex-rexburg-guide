import assert from "node:assert/strict";
import test from "node:test";
import { activities, filterActivities } from "../scripts/activities.js";

test("activity records are complete, unique, local, and source-backed", () => {
    assert.equal(activities.length, 8);
    assert.equal(new Set(activities.map(activity => activity.name)).size, activities.length);
    for (const activity of activities) {
        assert.match(activity.category, /^(hiking|adventure|nightlife|chill)$/);
        assert.match(activity.image, /^assets\/[a-z-]+\.svg$/);
        assert.match(activity.url, /^https:\/\//);
        assert.ok(activity.description.length >= 80);
        assert.ok(activity.alt.length > 10);
    }
});

test("filters return only the requested category", () => {
    assert.equal(filterActivities("all").length, 8);
    assert.equal(filterActivities("hiking").length, 2);
    assert.equal(filterActivities("adventure").length, 2);
    assert.equal(filterActivities("nightlife").length, 1);
    assert.equal(filterActivities("chill").length, 3);
    assert.deepEqual(filterActivities("unknown"), []);
});
