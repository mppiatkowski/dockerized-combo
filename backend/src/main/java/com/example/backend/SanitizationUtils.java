package com.example.backend;

import org.owasp.html.PolicyFactory;
import org.owasp.html.Sanitizers;

public class SanitizationUtils {
    private static final PolicyFactory POLICY = Sanitizers.FORMATTING.and(Sanitizers.LINKS);

    public static String sanitize(String input) {
        return POLICY.sanitize(input);
    }
}
