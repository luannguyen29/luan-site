---
title: "Template: incident write-up"
description: "Copy this file to start a new post. draft true keeps it off the site."
pubDate: 2026-11-09
tags: [template]
draft: true
---

## Symptom
What users or monitoring saw, and when.

## Investigation
Commands you ran and what they showed:

```bash
journalctl -u nginx --since "1 hour ago" | grep -i error
```

## Root cause

## Fix

## What I changed so it doesn't happen again
