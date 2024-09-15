#!/usr/bin/perl

use strict;
use warnings;

# File to be processed
my $filename = $ARGV[0];

$filename or die "No filename provided!";

# Open the file for reading
open(my $in, '<', $filename) or die "Could not open file '$filename': $!";

# Read the file content
my @lines = <$in>;
close($in);

# Process each line and multiply digits by 100
foreach (@lines) {
    s/(\\"price\\"\s*:\s*)(\d+(\.\d+)?)/$1 . ($2 * 100)/eg;
}

# Write the changes back to the file (optional)
open(my $out, '>', $filename) or die "Could not write to file '$filename': $!";
print $out @lines;
close($out);

print "All digits multiplied by 100 and saved back to '$filename'.\n";
