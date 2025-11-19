# 📚 WEEK 9 STUDENT GUIDE

**Session 9: Testing & Quality Assurance**

---

## 🎯 LEARNING OBJECTIVES

By the end of this session, you will be able to:

1. **Understand Different Types of Testing**

   - Distinguish between unit, integration, E2E, and manual testing
   - Know when to use each type of testing approach
   - Understand the testing pyramid concept

2. **Practice Manual Testing Systematically**

   - Use structured approaches to find bugs
   - Test edge cases and boundary conditions
   - Document findings with evidence and reproducible steps

3. **Create Professional Test Cases**

   - Write clear, actionable test case documentation
   - Convert bug reports into professional test cases
   - Prioritize bugs using industry-standard criteria

4. **Build Quality Assurance Processes**

   - Create pre-deployment QA checklists
   - Develop a quality mindset for software development
   - Understand real-world QA workflows

5. **Debug with a Structured Approach**
   - Use browser DevTools effectively
   - Follow systematic debugging methodologies
   - Identify root causes rather than just symptoms

---

## ⏰ SESSION TIMELINE & ACTIVITIES

### 0:00-0:10: Quality Detective Challenge 🔍

**What You'll Do:**

Work in teams to find 5 intentionally planted bugs in the `/broken-demo` component—including a UI/UX bug where the button to redisplay the chart is missing.

**How It Works:**

1. You will be put into a breakout room with a group of students
2. Navigate to `/broken-demo` in the application
3. Open and follow the `broken-demo-challenge/WORKSHEET.md`
4. Use systematic debugging to find all 5 bugs (Visual, Runtime, Logic, Edge Case, and UI/UX)
5. Document each bug with evidence, including UI/UX issues (e.g., missing or hidden buttons)

**Why It Matters:**
This warm-up exercise teaches you systematic debugging before the main workshop. You'll practice:

- Visual inspection techniques
- User interaction testing
- Console investigation
- Code analysis
- Professional bug documentation
- Identifying UI/UX bugs and edge cases (such as missing or inaccessible UI elements)

**The Systematic Debugging Process:**

**Step 1: Visual Inspection (2 min)**

- Look at the UI WITHOUT clicking anything
- Notice any odd text, layout issues, or visual inconsistencies
- Ask: "Does anything look wrong at first glance?"

**Step 2: User Interaction Testing (3 min)**

- Click every button
- Try different sequences of actions
- Ask: "Does the button text match what it does?"
- Test all interactive elements

**Step 3: Console Investigation (3 min)**

- Open Chrome DevTools (Press F12)
- Click the Console tab
- Look for error messages, warnings, or unexpected outputs
- Note line numbers and error types

**Step 4: Code Investigation (2 min)**

- Switch to Dev Mode to view code
- Look for suspicious code at the line numbers mentioned in errors
- Check for undefined variables, incorrect data structures, or logic errors

**Reference:** See `broken-demo-challenge/WORKSHEET.md` for the complete guided worksheet. Remember to look for all 5 bugs, including subtle UI/UX issues (such as when a button is missing or cannot be accessed).

---

### 0:10-0:30: Testing Fundamentals 📖

#### What is Testing?

Testing is the process of making sure your software works as expected, handles errors gracefully, and provides a good user experience. Think of it as quality control for code.

**Real-world analogy:** Just like a car manufacturer tests cars before selling them (brakes work, airbags deploy, engine runs smoothly), software developers test applications before users interact with them.

---

#### Types of Testing

**1. Unit Testing** 🧱

- **What:** Testing individual functions or components in isolation
- **Analogy:** Testing individual LEGO bricks to make sure each one is the right shape
- **Example:**

```javascript
// Function to test
function add(a, b) {
  return a + b;
}

// Unit test
test("add function adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});
```

- **When to use:** Testing utility functions, calculations, data transformations

**2. Integration Testing** 🔗

- **What:** Testing how multiple components work together
- **Analogy:** Testing how LEGO pieces connect and fit together
- **Example:**

```javascript
// Integration test
function processUpload(file) {
  const parsed = parseCSV(file); // Step 1
  const validated = validateData(parsed); // Step 2
  const analyzed = analyzeData(validated); // Step 3
  return analyzed;
}

// Test: Does the whole pipeline work together?
```

- **When to use:** Testing data flows, API integrations, component communication

**3. End-to-End (E2E) Testing** 🎯

- **What:** Testing complete user workflows from start to finish
- **Analogy:** Testing the complete LEGO castle after assembly
- **Example:** Testing a complete user journey:
  1. User visits homepage
  2. User uploads CSV file
  3. User sees chart rendered
  4. User downloads report
  5. User logs out
- **When to use:** Testing critical user paths, major features, production readiness

**4. Manual Testing** 👆

- **What:** A human (you!) clicking buttons, entering data, and checking results
- **Analogy:** Test driving a car yourself rather than using automated sensors
- **Example:** What you'll do in today's workshop!
- **When to use:** Exploratory testing, UX validation, edge cases, accessibility

---

#### The Testing Pyramid

```
       /\
      /E2E\        ← Few: Slow, expensive, brittle
     /------\
    / Integ \      ← Some: Medium speed, medium cost
   /----------\
  /   Unit     \   ← Many: Fast, cheap, reliable
 /--------------\
```

**Key Principle:** Write more unit tests, fewer integration tests, and even fewer E2E tests.

---

#### Introduction to Testing Tools

**For Unit & Integration Testing:**

- **Jest** - JavaScript testing framework
- **React Testing Library** - Test React components
- **Vitest** - Fast Vite-native test runner

**For E2E Testing:**

- **Cypress** - Modern E2E testing tool with great developer experience
- **Playwright** - Microsoft's cross-browser testing tool

**For Manual Testing:**

- **Browser DevTools** - Your best debugging friend
- **Responsive Design Mode** - Test different screen sizes
- **Network Throttling** - Test slow connections

---

#### Test Driven Development (TDD)

**The Red-Green-Refactor Cycle:**

```
1. 🔴 RED: Write a failing test first
   ↓
2. 🟢 GREEN: Write minimal code to make it pass
   ↓
3. 🔵 REFACTOR: Clean up the code
   ↓
   Repeat!
```

**Example TDD Workflow:**

```javascript
// 1. RED: Write failing test
test("calculateTotal adds prices correctly", () => {
  expect(calculateTotal([10, 20, 30])).toBe(60);
});
// Test fails because calculateTotal doesn't exist yet!

// 2. GREEN: Make it pass
function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
// Test now passes!

// 3. REFACTOR: Clean up if needed
// Code is already clean, move on to next feature
```

**Why TDD matters:**

- Ensures you actually write tests (not "I'll add tests later")
- Clarifies requirements before coding
- Creates confidence in refactoring

---

#### Why Testing Matters in the Real World

**Without Tests:**

- 😰 Fear of changing code ("What if I break something?")
- 🐛 Bugs found by users (embarrassing!)
- ⏰ Long debugging sessions
- 💸 Expensive fixes in production

**With Tests:**

- ✅ Confidence in code changes
- 🚀 Faster development cycles
- 🛡️ Catch bugs before users do
- 📚 Documentation (tests show how code should work)

**Real statistic:** Bugs found in production cost 10-100x more to fix than bugs found during development!

---

### 0:30-1:10: Real-World Bug Hunt & Test Creation Workshop 🐛

This is the main event! You'll spend 40 minutes finding real bugs, documenting them professionally, and learning to prioritize quality issues.

---

#### Phase 1: Find the Bugs (15 minutes)

**Your Mission:**
Try to break the Data Discovery application by uploading problematic CSV files and testing edge cases.

**What You'll Need:**

- The Data Discovery application (your main project)
- Sample test files from `docs/weekly-exercises/week9/data-discovery-bug-hunt/sample-test-files/`
- `data-discovery-bug-hunt/CHALLENGE.md` for detailed instructions
- A document to track your findings

**Attack Vectors to Try:**

**1. File Upload Chaos**

```
☐ Upload empty.csv (completely empty file)
☐ Upload headers_only.csv (only header row, no data)
☐ Upload special_chars.csv (international characters, symbols)
☐ Upload malformed.csv (broken CSV structure)
☐ Upload huge_numbers.csv (extreme values)
☐ Upload a .txt file (wrong file type)
☐ Upload a 50MB file (too large)
☐ Try to upload without selecting a file
```

**2. UI Stress Testing**

```
☐ Click "Upload" button repeatedly (rapid clicking)
☐ Upload file, immediately upload another (no wait)
☐ Click "Show Chart" before data loads
☐ Resize browser window while chart is rendering
☐ Navigate away and back during upload
☐ Use browser zoom (50%, 200%)
☐ Test on mobile view (responsive design mode)
```

**3. Data Boundary Testing**

```
☐ Upload CSV with 1 row only
☐ Upload CSV with 10,000 rows
☐ Upload CSV with empty cells
☐ Upload CSV with very long text (1000+ characters in one cell)
☐ Upload CSV with mixed data types in one column
☐ Upload CSV with duplicate headers
```

**4. Network & Performance**

```
☐ Test with slow 3G network (DevTools throttling)
☐ Test with offline mode (DevTools)
☐ Clear cache and test again
☐ Test in incognito mode
```

**Documentation Template:**
As you find bugs, document them immediately:

```markdown
## Bug #1: [Short descriptive title]

**Steps to Reproduce:**

1. Go to homepage
2. Click "Upload CSV"
3. Select empty.csv
4. Click "Upload"

**Expected Result:**
App should show error: "File is empty. Please upload a valid CSV."

**Actual Result:**
App crashes with white screen. Console shows:
"TypeError: Cannot read property 'length' of undefined at line 45"

**Evidence:**
[Screenshot of error]
[Copy of console error message]

**Environment:**

- Browser: Chrome 120
- OS: Windows 11
- Screen: 1920x1080
- Network: Normal

**Severity:** Critical (app crashes)
**Priority:** P0 (affects all users, no workaround)
```

**Team Collaboration Tips:**

- **Divide and conquer:** Each team member tries different attack vectors
- **Share findings:** When someone finds a bug, everyone should try to reproduce it
- **Document as you go:** Don't rely on memory - write it down immediately
- **Take screenshots:** Visual evidence is powerful
- **Copy error messages:** Exact text matters

**Goal:** Find 5-10 bugs as a team. Quality over quantity!

---

#### Phase 2: Convert Bugs into Professional Test Cases (15 minutes)

Now you'll learn how real QA engineers communicate bugs to developers.

**Your Mission:**
Pick your 3-5 most important bugs and convert them into professional test cases using the `data-discovery-bug-hunt/TEST_CASE_TEMPLATE.md` format.

**Why This Matters:**
In the professional world, a vague bug report like "it's broken" wastes everyone's time. A detailed test case helps developers:

- Reproduce the bug quickly
- Understand the root cause
- Test their fix
- Prevent regression

**The Transformation:**

**❌ Bad Bug Report:**

```
"The upload thing doesn't work with some files"
```

**✅ Professional Test Case:**

````markdown
# Test Case: TC-UPLOAD-001

**Test ID:** TC-UPLOAD-001
**Feature:** File Upload
**Component:** DataUpload.tsx
**Scenario:** Application crashes when uploading empty CSV file

**Priority:** P0 - Critical
**Severity:** Critical
**Status:** Open

---

## Prerequisites

- Application is running and accessible
- User is on the homepage
- No files have been uploaded yet

---

## Test Data

**File:** empty.csv
**Content:** Completely empty (0 bytes)
**Location:** docs/weekly-exercises/week9/SAMPLE_TEST_FILES/empty.csv

---

## Steps to Reproduce

1. Navigate to http://localhost:5173
2. Locate the "Upload CSV" section
3. Click "Choose File" button
4. Select `empty.csv` from test files directory
5. Click "Upload" button

---

## Expected Result

- Application displays user-friendly error message:
  "The uploaded file is empty. Please select a CSV file with data."
- Upload form remains functional
- No console errors
- User can try uploading a different file

---

## Actual Result

- Application crashes completely
- White screen displayed to user
- Console error: `TypeError: Cannot read property 'length' of undefined`
  - At: DataUpload.tsx:45
  - Stack trace: [full stack trace]
- No way to recover without page refresh

---

## Evidence

- Screenshot: [attach screenshot of white screen]
- Console log: [attach full console output]
- Network tab: [attach if relevant]
- Video: [if available]

---

## Impact

**User Impact:** HIGH

- All users affected
- Complete application failure
- No error recovery
- Data loss if upload was in progress

**Business Impact:**

- Loss of user trust
- Support tickets
- Potential data loss

---

## Suggested Fix

Add file validation before parsing:

```javascript
// In DataUpload.tsx, before parsing
if (file.size === 0) {
  setError("The uploaded file is empty. Please select a valid CSV file.");
  return;
}

// Then proceed with parsing...
```
````

Additional validation needed:

- Check file type (must be .csv)
- Check file size (max 10MB)
- Check for valid headers

---

## Test Environment

- Browser: Chrome 120.0.6099.130
- OS: Windows 11 Pro
- Screen Resolution: 1920x1080
- Network: Fast 3G (throttled)
- React Version: 18.3.1
- Date Tested: 2024-01-15

---

## Prevention Strategy

**QA Checklist Item:**
☐ Test file upload with empty.csv

**Automated Test:**

```javascript
test("should handle empty CSV file gracefully", () => {
  const emptyFile = new File([], "empty.csv", { type: "text/csv" });
  render(<DataUpload />);
  // Upload file and expect error message
});
```

---

## Related Test Cases

- TC-UPLOAD-002: Headers-only CSV file
- TC-UPLOAD-003: Malformed CSV file
- TC-UPLOAD-004: Large file (>10MB)

```

**See the difference?**
The professional test case gives developers everything they need to:
1. Reproduce the bug in 30 seconds
2. Understand the impact
3. Implement and test a fix
4. Prevent it from happening again

---

**Your Task:**
1. Open `TEST_CASE_TEMPLATE.md`
2. For each of your top 3-5 bugs, create a test case with:
   - ✅ Clear Test ID (TC-FEATURE-###)
   - ✅ Feature and Component
   - ✅ Priority and Severity
   - ✅ Prerequisites
   - ✅ Exact test data used
   - ✅ Step-by-step reproduction
   - ✅ Expected vs Actual results (contrast clearly)
   - ✅ Evidence (screenshots, console logs)
   - ✅ Impact analysis
   - ✅ Suggested fix (if you have ideas)
   - ✅ Environment details
   - ✅ Prevention strategy

---

**Components of a Professional Test Case:**

**1. Clear Identifiers**
```

Test ID: TC-UPLOAD-001
Feature: File Upload
Component: DataUpload.tsx

```
- Makes it easy to reference in meetings
- Helps track in bug tracking systems
- Organizes by feature area

**2. Context & Prerequisites**
```

Prerequisites:

- User must be logged in
- No previous files uploaded
- Browser cache cleared

```
- Ensures anyone can reproduce
- Eliminates "works on my machine"

**3. Exact Reproducibility**
```

Steps to Reproduce:

1. Click "Upload CSV" (not "Choose File")
2. Select empty.csv (0 bytes, not 1 byte)
3. Wait 2 seconds (timing matters!)
4. Click "Upload"

```
- Every detail matters
- Order of operations counts
- Timing can matter

**4. Evidence**
```

Console Error:
TypeError: Cannot read property 'length' of undefined
at parseCSV (DataUpload.tsx:45)
at handleUpload (DataUpload.tsx:78)

```
- Screenshot of error
- Console logs
- Network tab if relevant
- Video if complex interaction

**5. Value-Add**
```

Suggested Fix:
Add validation before line 45

Prevention:
Add to pre-deployment checklist
Create automated test

```
- Don't just report, help solve
- Think about prevention
- Consider long-term quality

---

**Quality Checklist for Your Test Cases:**

Before you submit a test case, ask yourself:

```

☐ Can a developer who's never seen this bug reproduce it from my steps?
☐ Did I include the exact file name and test data?
☐ Did I copy the full console error message?
☐ Did I attach a screenshot?
☐ Did I specify my browser and OS?
☐ Did I explain the expected behavior clearly?
☐ Did I contrast expected vs actual results?
☐ Did I assess priority and severity?
☐ Did I suggest a fix or prevention strategy?
☐ Is my language professional and clear?

```

If you answered "yes" to all, you're good to go!

---

#### Phase 3: Prioritize Using the Bug Matrix (10 minutes)

Not all bugs are created equal. Some need fixing RIGHT NOW, others can wait. Learning to prioritize is a critical QA skill.

**Understanding Priority Levels:**

**P0 - Critical (Drop Everything)**
```

Fix: Immediately (within hours)
Examples:

- App crashes on homepage
- Data loss occurs
- Security vulnerability exposed
- Payment system broken
- Cannot log in

Characteristics:

- No workaround available
- Affects all or most users
- Business-critical feature broken
- Potential legal/security issues

```

**P1 - High Priority (Fix Today)**
```

Fix: Within 24 hours
Examples:

- Major feature broken (has workaround)
- Chart doesn't render (can still view data table)
- Slow performance (still usable)
- Important button has typo

Characteristics:

- Workaround exists but painful
- Affects many users
- Important but not critical feature
- User experience significantly degraded

```

**P2 - Medium Priority (Fix This Week)**
```

Fix: Within 1 week
Examples:

- Minor UI glitch
- Uncommon edge case
- Console warning (no user impact)
- Feature request disguised as bug

Characteristics:

- Affects few users
- Easy workaround available
- Cosmetic issue
- Low business impact

```

**P3 - Low Priority (Fix When Possible)**
```

Fix: Next sprint or backlog
Examples:

- Text alignment off by 2px
- Typo in tooltip
- Rare edge case
- Nice-to-have feature

Characteristics:

- Minimal user impact
- Very rare occurrence
- Purely cosmetic
- No business impact

```

---

**Priority vs Severity: What's the Difference?**

**Severity** = Technical impact (How bad is the code break?)
**Priority** = Business impact (How urgently must we fix it?)

**They don't always match!**

**Example 1: High Severity, Low Priority**
```

Bug: App crashes when uploading 100MB CSV file

Severity: Critical (app crashes)
Priority: P2 (Medium)

Why?

- Very rare (who uploads 100MB CSVs?)
- Easy workaround (split the file)
- Affects <1% of users

```

**Example 2: Low Severity, High Priority**
```

Bug: CEO's name misspelled on About page

Severity: Low (just text)
Priority: P0 (Critical)

Why?

- CEO will see it
- Public-facing embarrassment
- Easy to fix
- Brand reputation

```

---

**The Bug Prioritization Matrix:**

```

High Impact, High Likelihood → P0 (Fix NOW!)
High Impact, Low Likelihood → P1 (Fix soon)
Low Impact, High Likelihood → P2 (Schedule it)
Low Impact, Low Likelihood → P3 (Backlog)

```

**Exercise: Prioritize These Bugs**

```

Bug A: Empty CSV crashes app

- Severity: Critical (app crash)
- Likelihood: Medium (users might upload empty files)
- Workaround: None
- Your Priority: \_\_\_

Bug B: Special characters display as "?"

- Severity: Medium (data corrupted)
- Likelihood: Low (uncommon in US)
- Workaround: Use ASCII only
- Your Priority: \_\_\_

Bug C: Chart colors don't match mockup

- Severity: Low (cosmetic)
- Likelihood: High (everyone sees it)
- Workaround: None needed
- Your Priority: \_\_\_

Bug D: Hover tooltip has typo

- Severity: Low (just text)
- Likelihood: High (visible to all)
- Workaround: None needed
- Your Priority: \_\_\_

```

**Discussion Questions for Your Team:**

1. **"Which bugs affect the most users?"**
   - Count potential impact
   - Consider frequency of use

2. **"Which bugs have no workaround?"**
   - Blocking bugs = higher priority
   - Workarounds buy you time

3. **"What's the business impact?"**
   - Lost revenue?
   - Brand damage?
   - Legal issues?
   - User trust?

4. **"How difficult is the fix?"**
   - 5-minute fix for P2 bug → might jump to P1
   - 3-day fix for P1 bug → might split into phases

5. **"Which bugs prevent testing other features?"**
   - Blocking bugs jump in priority
   - Dependencies matter

**Your Task:**
1. List all bugs your team found
2. For each bug, assign:
   - Severity (Critical, High, Medium, Low)
   - Priority (P0, P1, P2, P3)
   - Justification (why this priority?)
3. Rank them from highest to lowest priority
4. Be prepared to defend your decisions!

**Pro Tip:** When in doubt about priority, ask:
> "If we shipped to production right now with this bug, what would happen?"

- Users can't use the app → P0
- Users complain but can still work → P1
- Users don't notice or don't care → P2/P3

---

### 1:10-1:20: QA Checklist Creation ✅

You've been reactive (finding bugs). Now it's time to be proactive (preventing bugs).

**The Mindset Shift:**
```

Bug Hunter → "I found 10 bugs!"
QA Engineer → "I prevented 100 bugs from reaching users!"

```

**Your Mission:**
Create a pre-deployment QA checklist based on the bugs you found today.

**The Principle:**
```

Every bug you found → One checklist item

Bug: "Empty CSV crashes app"
↓
Checklist: "☐ Test with empty CSV file"

````

---

**Pre-Deployment QA Checklist Template:**

```markdown
# Pre-Deployment QA Checklist
**Project:** Data Discovery Tool
**Date Created:** [Today's date]
**Created By:** [Your team name]
**Based On:** Bug hunt findings from Week 9

---

## 1. Functionality Testing

### File Upload
☐ Test with empty.csv (0 bytes)
☐ Test with headers_only.csv
☐ Test with malformed.csv (broken structure)
☐ Test with special_chars.csv (José, 李明, Müller)
☐ Test with huge_numbers.csv (extreme values)
☐ Test with .txt file (wrong type)
☐ Test with 50MB file (too large)
☐ Test upload without selecting file
☐ Test rapid successive uploads
☐ Test upload cancellation

### Data Processing
☐ Verify data parses correctly from valid CSV
☐ Check that column headers display properly
☐ Confirm row counts are accurate
☐ Validate data types (numbers vs text)
☐ Test with 1 row of data
☐ Test with 10,000 rows of data
☐ Test with empty cells in data
☐ Test with duplicate headers

### Chart Rendering
☐ Chart displays with valid data
☐ Chart shows "No data" message when appropriate
☐ Chart handles extreme values (zoom, scale)
☐ Chart responds to window resize
☐ Chart renders in mobile view
☐ Chart colors are accessible (contrast)

### Data Table
☐ Table displays all uploaded data
☐ Sorting works on all columns
☐ Pagination works if many rows
☐ Search/filter functionality works
☐ Export data feature works

---

## 2. Error Handling

☐ Empty file shows error message (not crash)
☐ Wrong file type shows clear error
☐ Large file shows size limit error
☐ Malformed CSV shows parsing error
☐ Network errors are handled gracefully
☐ All errors have user-friendly messages
☐ Console has no unexpected errors
☐ Error messages are helpful (tell user what to do)

---

## 3. User Experience (UX)

☐ Loading states show during upload
☐ Progress indicators work correctly
☐ Success messages appear after successful upload
☐ Buttons are disabled when action is in progress
☐ User can cancel long-running operations
☐ Interface is intuitive (no confusing elements)
☐ Help text/tooltips are available
☐ Feedback is immediate for user actions

---

## 4. Performance

☐ Large files upload in reasonable time
☐ Charts render quickly (<2 seconds)
☐ No memory leaks (test repeated uploads)
☐ App remains responsive during processing
☐ Network requests are optimized
☐ Images/assets load quickly
☐ No unnecessary re-renders

---

## 5. Responsive Design

☐ Works on mobile (320px width)
☐ Works on tablet (768px width)
☐ Works on desktop (1920px width)
☐ Works on ultra-wide (2560px width)
☐ No horizontal scrolling on mobile
☐ Touch targets are large enough (mobile)
☐ Text is readable at all sizes
☐ Charts adapt to screen size

---

## 6. Browser Compatibility

☐ Chrome (latest version)
☐ Firefox (latest version)
☐ Safari (latest version)
☐ Edge (latest version)
☐ Chrome mobile (Android)
☐ Safari mobile (iOS)

---

## 7. Accessibility

☐ All images have alt text
☐ Keyboard navigation works
☐ Focus states are visible
☐ Color contrast meets WCAG AA standards
☐ Screen reader announces important changes
☐ Form inputs have labels
☐ Error messages are announced
☐ No keyboard traps

---

## 8. Security & Data Privacy

☐ No sensitive data in console logs
☐ File uploads are validated (type, size)
☐ No XSS vulnerabilities (test with scripts in CSV)
☐ HTTPS is enforced (if deployed)
☐ No exposed API keys in frontend code
☐ User data is not stored insecurely
☐ File upload size limits prevent DoS

---

## 9. Edge Cases

☐ What if user has JavaScript disabled?
☐ What if user has ad blocker?
☐ What if user loses internet during upload?
☐ What if user refreshes during processing?
☐ What if user opens app in multiple tabs?
☐ What if user's clock is wrong (timezone issues)?
☐ What if CSV has 0 rows?
☐ What if CSV has 1 million rows?

---

## 10. Final Checks

☐ All console errors fixed
☐ All console warnings reviewed
☐ No TODO comments in production code
☐ Debug logs removed
☐ Test data removed
☐ Documentation is up to date
☐ README has correct instructions
☐ Environment variables are documented
☐ Dependencies are up to date
☐ Build succeeds with no warnings
☐ Deployment succeeds

---

## Sign-Off

**Tested By:** ________________
**Date:** ________________
**All Critical Items Passed:** ☐ Yes ☐ No
**Ready for Production:** ☐ Yes ☐ No
**Notes:**
_______________________________________
_______________________________________
````

---

### 1:20-1:35: Testing Tools & Culture 🛠️

(Guide continues with instructions for DevTools, responsive mode, accessibility inspector, bug tracking tools, automation recommendations, QA culture, challenges and solutions, preparation for Week 10, presentation structure, and resources.)

(Please refer to the full session notes provided by your instructor or the course repository for the complete remaining content and exercises.)

---

## 🔚 Closing Notes

This guide is intended to be used by instructors and students as a structured plan for a 75-90 minute workshop on testing and QA. Use the checklists to drive hands-on sessions and convert findings into professional test cases for real-world experience.
