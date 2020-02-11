import { TestBed } from "@angular/core/testing";

import { MetaTagService } from "./meta-tag.service";

describe("MetaTagService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MetaTagService = TestBed.inject(MetaTagService);
    expect(service).toBeTruthy();
  });
});
